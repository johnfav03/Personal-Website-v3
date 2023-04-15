import Image from 'next/image'
import Link from 'next/link'
import Spacer from '../components/Spacer'
import SkillBar from '../components/SkillBar'

export default function Project({ offset, pos, src, title, date, skills, desc, link }: {offset: number, pos: number, src: string, title: string, date: string, skills: string[], desc: string, link: string}) {
    const adjPos = (((((offset*100)+pos)+12)*100)/(70));
    // -12 to 58

    return (
        <div className="h-[400px] w-60 block relative flex flex-col flex-start">
            {link != "" ?
            <Link href={link} target="_blank" className="h-8 hover:border-white border-lblue font-bold text-dorng bg-bblue border-[2px] rounded text-dm text-[16px] flex justify-center items-center">{title}</Link>
            :
            <h3 className="h-8 border-lblue font-bold text-dorng bg-bblue border-[2px] rounded text-dm text-[16px] flex justify-center items-center">{title}</h3>
            }
            <Spacer wid={"2rem"} hgt={"0.5rem"}/>
            <Image
                src={`/images/${src}.png`}
                className={`object-cover w-full h-60 rounded object-contain border-[1px] border-white`}
                style={{objectPosition: `${adjPos}% 100%`, transition: `object-position 1s ease-out`}}
                alt={src}
                height={300}
                width={300}
                /* {((100 + pos) > 0 ? (100 + pos) : 0)} */
            />
            <div className="bg-lorng absolute left-[-2px] top-[39px] w-[90px] h-[30px] flex rounded justify-center items-center">
                <p className="text-white">{date}</p>
            </div>
            <Spacer wid={"2rem"} hgt={"0.8rem"}/>
            <SkillBar arr={skills}/>
            <Spacer wid={"2rem"} hgt={"0.8rem"}/>
            <p className="text-[13px] text-white">
                {desc}
            </p>
        </div>
    )
}