function WrapMenuHasBackGround({ children, clickMenu2, clickButtonDone }) {
    return (
        <div>
            <div className="block fixed top-0 left-0 w-full h-full bg-backGroundWrapMenu z-40"></div>
            <div className="fixed top-0 left-0 w-full h-full bg-transparent z-50 overflow-auto flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}

export default WrapMenuHasBackGround;
