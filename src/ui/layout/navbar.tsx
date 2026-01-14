import { LogoSvg } from "@/ui/branding/logo-svg";
import { BASE_PATH } from "@/lib/config";
import { cn } from "@/lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
    return (
        <header className={cn(
            "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60",
            className
        )}>
            <div className="container flex h-16 items-center mx-auto px-4">
                <div className="mr-8 flex items-center gap-6">
                    <a href={"https://opensphere.ai/"} className="flex items-center space-x-2">
                        <LogoSvg className="h-8 w-auto" />
                    </a>
                    <div className="h-6 w-[1px] bg-gray-200" aria-hidden="true" />
                    <a href={"https://legalbridge.ai/"} className="flex items-center space-x-2">
                        <img
                            src={`${BASE_PATH === "/" ? "" : BASE_PATH}/image.png`}
                            alt="Legal Bridge"
                            className="h-8 w-auto object-contain"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
};
