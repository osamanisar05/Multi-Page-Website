import Image from 'next/image';
import Link from "next/link";
import Olympians from '../Olympians/page';
import Ideas from '../Ideas/page';
import Habbits from '../habbits/page';
import Brain from '../brain/page';
import Outdoor from '../outdoor/page';
import Balance from '../balance/page';

type IData = {
    title : string;
    description : string;
    picture: string
    link: string
};
const data: IData[]= [
 {title: "Training Secrets of Olympians to Help You Stay Fit",picture: "/Olympions.png" ,description: "These training secrets of Olympians will help you stay fit, from training quality over quantity and effective recovery strategies to the importance of coaching. Use these tips to become the best and most fit version of yourself.",link: "/Olympians"},
 {title: "Back to School: Nutritious Lunch Ideas for Kids",picture:"/back to school.png", description: "As back to school season approaches, consider these nutritious lunch ideas for kids. These strategies will help you pack healthy school lunches as a family, and simple lunchbox swaps and kids’ lunchbox ideahs will make it easy.", link: "/Ideas"},
 {title: "The Power of Routine: Healthy Habits for a Better Life",picture:"/Healthy habbits.png", description: "Healthy habits and daily routines can reduce stress and help you make better decisions throughout the day. Learn how to build a morning routine and develop evening habits for better sleep.",link:"/habbits"},
 {title: "3 Ways to Supercharge the Body and Brain for Back to School",picture:"/brain for back to school.png", description: "These back to school wellness tips can help ease the transition from summer slacking to more structured schedules. Learn about mindfulness for students, as well as 3 activities kids can do to set themselves up for success.",link: "/brain"},
 {title: "Get Out! 5 Benefits of Outdoor Exercise",picture:"/5 benifits.png", description: "Outdoor exercise, also called green exercise, helps improve self-esteem, save money and connect with Mother Nature. Learn about the many benefits of outdoor exercise.",link: "/outdoor"},
 {title: "Body Positivity: Finding a Balance",picture:"/finding balance.png", description: "The topic of body positivity has emerged as a mainstay of modern culture, and there are two extremes to this debate: weight focus and weight neutrality. Find an empowering balance between the two as you learn to accept and appreciate your own body.",link: "/balance"},
];

export default function Responsive() {
    return (
        <div className="parent bounce-in-right">
            {data.map((Idata, index) => (
                <div className="child" key={index}>
                    <div className="image">
                        <Image className="profilePicture" src={Idata.picture} alt="profilePicture" width={200} height={200} />
                    </div>
                    <h1 className="Title">{Idata.title}</h1>
                    <br />
                    <p className="description">{Idata.description}</p>
                    
                    {/* Wrap the button with Link */}
                    <Link href={Idata.link}>
                        <button className="ReadMore">Read more...</button>
                    </Link>
                    
                </div>
            ))}

        </div>
    );
}