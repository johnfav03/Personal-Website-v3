function truncate({ str, maxlength }: { str: string, maxlength: number }) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

function Skill({ name }: { name: string }) {
  return (
    <div className="text-white border-white border-white border-[1px] rounded w-[33%] text-xs py-[2px] flex justify-center">
        <p> {truncate({str: name, maxlength: 20})} </p>
    </div>
  );
}

export default function SkillBar({ arr }: { arr: string[]}) {
  return (
    <div className="flex flex-row justify-center w-[100%] flex justify-center gap-x-[10px]">
      {arr.map(name => {
        return <Skill key={name} name={name}/>;
      })}
    </div>
  );
}