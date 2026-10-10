interface PageHolderProps {
    background?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    /** When true, content is scrollable and top-aligned (e.g. for long pages like Home) */
    scrollable?: boolean;
    /** Top padding for navbar on centered layouts. Default true. Set false for pages without navbar. */
    navbarOffset?: boolean;
}

const PageHolder = ({ background, children, className, scrollable, navbarOffset = true }: PageHolderProps) => {
    const contentAreaClasses = scrollable
        ? "relative z-10 w-full min-h-0 pt-[90px] overflow-y-auto overflow-x-hidden overscroll-contain"
        : `relative z-10 flex items-center justify-center w-full h-full ${navbarOffset !== false ? "pt-[90px]" : ""}`;

    const contentWrapperClasses = scrollable
        ? `min-w-0 w-full max-w-[1100px] h-auto mx-auto px-3 sm:px-10 flex flex-col ${className || ""}`
        : `min-w-0 w-full max-w-[1100px] px-3 sm:px-10 flex flex-col ${className || ""}`;

    return (
        <div className="fixed inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black">
                {background}
            </div>
            <div
                className={contentAreaClasses}
                style={scrollable ? { height: "100dvh" } : undefined}
                {...(scrollable ? { "data-lenis-prevent": "" } : {})}
            >
                <div className={contentWrapperClasses}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageHolder;