import nodemailer from 'nodemailer';

// Define the expected shape of the request body
interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    message: string;
}

interface EmailResponse {
    success: boolean;
    message: string;
}

// Create a singleton transporter to reuse across requests
let transporter: nodemailer.Transporter | null = null;

// Function to get or create transporter
function getTransporter() {
    if (!transporter) {
        // Check if environment variables are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            console.error('Email credentials not configured properly');
            throw new Error('Email configuration error');
        }

        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
            // Adding timeouts can help prevent hanging requests
            tls: {
                rejectUnauthorized: true,
                timeout: 10000 // 10 seconds timeout
            },
            connectionTimeout: 10000 // 10 seconds connection timeout
        });
    }
    return transporter;
}

// Main handler
export async function POST(req: Request): Promise<Response> {
    console.time('email-send'); // Start timing the request

    try {
        const body: ContactFormData = await req.json();

        const { name, email, company, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Name, email, and message are required'
                } satisfies EmailResponse),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        try {
            // Get transporter
            const emailTransporter = getTransporter();

            // Optional company info
            const companyInfo = company ? `\nCompany: ${company}` : '';

            // Email options
            const mailOptions = {
                from: {
                    name: `${name} (from portfolio website)`,
                    address: process.env.EMAIL_USER || ''
                },
                to: 'behura960@gmail.com',
                replyTo: email,
                subject: `New Contact Form Message from ${name}`,
                text: `Name: ${name}\nEmail: ${email}${companyInfo}\n\nMessage:\n${message}`,
                html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Message</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #333;">
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 0.8em; color: #666;">This message was sent from your portfolio website contact form.</p>
        </div>
      `
            };

            console.log('Sending email...');
            // Send email with timeout
            const info = await Promise.race([
                emailTransporter.sendMail(mailOptions),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Email sending timed out after 20s')), 20000)
                )
            ]);

            console.log('Email sent successfully:', info);
            console.timeEnd('email-send'); // End timing

            return new Response(
                JSON.stringify({
                    success: true,
                    message: 'Email sent successfully'
                } satisfies EmailResponse),
                {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        } catch (emailError) {
            console.error('Error in email sending process:', emailError);
            throw emailError; // Re-throw to be caught by the outer try-catch
        }
    } catch (error) {
        console.error('Error in API route:', error);
        console.timeEnd('email-send'); // End timing even on error

        return new Response(
            JSON.stringify({
                success: false,
                message: 'Failed to send email. Please try again later.'
            } satisfies EmailResponse),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}