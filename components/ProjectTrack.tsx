import ProjectBox from '../components/ProjectBox'
import { Children } from 'react'

export default function ProjectTrack({ children, pos, adj }: { children: React.ReactNode, pos: number, adj: number }) {
    const count = Children.count(children);
    return (
        <div className={`flex min-w-max gap-x-8`}
            style={{transform: `translate(${adj}%, 0%)`, transition: `transform 1s ease-out`}}>
            { children }
        </div>
    );
}