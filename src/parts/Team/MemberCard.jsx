const Card = (props) => {
  const { name, photo, role, index } = props;
  return (
    <div className="col-span-3 md:col-span-1 border-r-3">
      <div className={`bg-orange-color rounded-[30px]`}>
        <img className={`team member-image`} src={photo} alt="logo"/>
      </div>
      <div className="pt-5 font-['SpaceGrotesk'] text-[32px] font-bold uppercase text-main-color text-center">
        {name}
      </div>
      <div className="font-['Inter'] text-lg uppercase text-orange-color text-center ">
        {role}
      </div>
    </div>
  );
};

export default Card;
