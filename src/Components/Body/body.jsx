import { Introduction } from './introduction';
import { AboutMe } from './aboutMe';
import { FrameworksSvg } from './frameworksSvg';
import { Contact } from './contact';
import { Map } from './map';

export const Body = () => {
    return (
        <div>
            <Introduction />
            <AboutMe />
            <FrameworksSvg />
            <Contact />
            <Map />
        </div>
    )
}