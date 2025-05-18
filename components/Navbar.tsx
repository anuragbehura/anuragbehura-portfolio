import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    FileTextIcon,
    BackpackIcon,
    LayersIcon,
    AvatarIcon,
    HomeIcon,
} from "@radix-ui/react-icons";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import ThemeSwitcher from "./ThemeSwitcher";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";

const navData = {
    navbar: [
        { href: "/projects", label: "Projects", icon: LayersIcon },
        { href: "/experience", label: "Education & Experience", icon: BackpackIcon },
        { href: "/about", label: "About", icon: AvatarIcon },
        { href: "/contact", label: "Contact", icon: EnvelopeClosedIcon },
    ],
    social: [
        { href: "https://github.com/anuragbehura", label: "GitHub", icon: GitHubLogoIcon },
        { href: "https://linkedin.com/in/anuragbehura", label: "LinkedIn", icon: LinkedInLogoIcon },
        { href: "/AnuragBehuraNew.pdf", label: "Resume", icon: FileTextIcon },
    ],
};

export default function Navbar() {
    return (
        <TooltipProvider>
            {/* Desktop Navigation */}
            <div className="hidden md:flex pointer-events-none inset-x-0 top-0 z-50 mx-auto h-28 ">
                <Dock className="pointer-events-auto rounded-full bg-background/90 backdrop-blur-lg relative mx-auto flex h-14 items-center px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_20px_80px_-20px_#ffffff1f_inset]">
                    {/* Home Icon */}
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <HomeIcon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Home</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                    <Separator orientation="vertical" className="h-8 bg-neutral-300" />

                    {/* Navigation Links */}
                    {navData.navbar.map((item) => (
                        <DockIcon key={item.href}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        prefetch
                                        href={item.href}
                                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    <Separator orientation="vertical" className="h-8 bg-neutral-300" />

                    {/* Social Links */}
                    {navData.social.map((item) => (
                        <DockIcon key={item.href}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    <Separator orientation="vertical" className="h-8 bg-neutral-300" />

                    {/* Theme Toggle */}
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <ThemeSwitcher />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center">
                <Dock className="flex items-center gap-4 px-4 rounded-full bg-background/80 backdrop-blur-md shadow-lg">
                    {/* Home Icon */}
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <HomeIcon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Home</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                    <Separator orientation="vertical" className="h-8 bg-neutral-300" />

                    {navData.navbar.map((item) => (
                        <DockIcon key={item.href}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    <Separator orientation="vertical" className="h-8 bg-neutral-300" />

                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    {/* <ModeToggle /> */}
                                    <ThemeSwitcher />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </div>
        </TooltipProvider>
    );
}