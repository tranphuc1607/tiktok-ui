import Button from '~/components/Button';

function SidebarBetweenWhenNotLogged() {
    return (
        <div className="mt-[8px] px-[8px] pb-[24px] w-[224px] h-[175px] flex flex-col ">
            <div className="w-full h-[1px] bg-backGround"></div>
            <div className="w-full h-[63px] text-[17px] text-colorLetterBold1 mt-[20px] text-start leading-[21px]">
                Log in to follow creators, like videos, and view comments.
            </div>
            <Button buttonInSidebar>Log In</Button>
        </div>
    );
}

export default SidebarBetweenWhenNotLogged;
