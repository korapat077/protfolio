
const BodyContent = () => {
    return (
        <div className="container mx-auto px-4  font-sans ">
            <div className="flex flex-wrap justify-center">
                <div className=" w-6/12 sm:w-2/12 px-4">
                    <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.6435-9/150510022_1421633901507660_8838660004133531213_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG_5NghJPfRhRn1Gyu5cCqg2XQrjbvR7ijZdCuNu9HuKEgWrCH_KagXmidVk50M9JyhGWmMHkr3HW5Wvj1th6TT&_nc_ohc=zGQvH5oANPgAX_3CDKO&_nc_ht=scontent.fbkk5-6.fna&oh=00_AT9NAn4S-NQgK6eXR0lOWmoawuMAeUNnVST-jtq61gEq8w&oe=62E9C31A" className="shadow-lg rounded-lg max-w-full h-auto align-middle border-none"></img>
                </div>
            </div>
            <div className="flex flex-wrap justify-center  mt-10 ">
                <div className=" text-xl md:text-2xl font-bold  text-[#09203f]">Name :</div>
                &nbsp;&nbsp;
                <div className="text-xl md:text-2xl   text-[#09203f]">Korapat sittikool</div>
            </div>
            <div className="flex flex-wrap justify-center  mt-5">
                <div className="text-xl md:text-2xl font-bold  text-[#09203f]">Position :</div>
                &nbsp;&nbsp;
                <div className="text-xl md:text-2xl  text-[#09203f]">Full-Stack Web Developer</div>
            </div>
            <div className="flex flex-wrap justify-center  mt-8 ">
                <div className="grid grid-cols-1  gap-4 md:grid-cols-3">
                    <div className="flex flex-wrap justify-center shadow-lg shadow-[#feada6]  p-2 rounded-full">
                        <div className="text-xl md:text-2xl  font-bold  text-[#09203f] drop-shadow-2xl">Nickname :</div>
                        &nbsp;&nbsp;
                        <div className="text-xl md:text-2xl   text-[#09203f]"> Ta</div>
                    </div>
                    <div className="flex flex-wrap justify-center shadow-lg shadow-[#feada6]  p-2 rounded-full">
                        <div className="text-xl md:text-2xl  font-bold  text-[#09203f]">Age :</div>
                        &nbsp;&nbsp;
                        <div className="text-xl md:text-2xl   text-[#09203f]"> 22</div>
                    </div>
                    <div className="flex flex-wrap justify-center shadow-lg shadow-[#feada6]  p-2 rounded-full">
                        <div className="text-xl md:text-2xl  font-bold  text-[#09203f]">Birthday :</div>
                        &nbsp;&nbsp;
                        <div className="text-xl md:text-2xl   text-[#09203f]"> 26 December 1999</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { BodyContent }