interface BasicIntroductionProps {
  userData: {
    name: string;
    headline: string;
  };
}

{
  /*
  For reference:
  <div className="group relative inline-block">
<div className="absolute h-[2px] w-0 -bottom-1 right-0 rounded-full bg-gradient-to-r from-[#f9b16e] to-[#f68080] group-hover:w-full transition-all group-hover:left-0 duration-300" />
</div>
*/
}

const BasicIntroduction = ({ userData }: BasicIntroductionProps) => {
  const { name, headline } = userData;

  return (
    <div className="px-5 pt-5 space-y-0">
      <h3 className="text-lg md:text-xl text-neutral-400 font-medium">
        Hi, my name is
      </h3>
      <h1 className="text-4xl md:text-5xl font-bold gradient-linear-text">
        {name}
      </h1>
      <h2 className="text-xl md:text-2xl text-red pt-2 border-b-transparent hover:border-b-[2px 4px 6px]">
        {headline}
      </h2>
    </div>
  );
};

export default BasicIntroduction;
