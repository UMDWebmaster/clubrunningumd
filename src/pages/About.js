import React from 'react';
import '../CSS/About.css';
import sohanImage from '../Pictures/sohanintro.jpeg';
import maxImage from '../Pictures/maxw.jpg';
import domImage from '../Pictures/dominick.png';
import zachImage from '../Pictures/zack.jpeg';
import calebImage from '../Pictures/CalebBio.JPG';
import lillianImage from '../Pictures/lillianBioPic.jpeg';
import eamonImage from '../Pictures/eamon2021.jpeg';
import jbImage from '../Pictures/JacobBio.jpg';


function About() {

    return (
        <div className="about-us-container">
					<div className="bio-card"> {/*Image on the left*/}
						<div className="align-left md:w-1/2">
							<img src={sohanImage} alt="Sohan Pic"/>
						</div>
						<div className="flex flex-col md:w-1/2 ml-5 mr-5">
							<h1 className="bio-content">President: Sohan Ganatra</h1>
							<p className="text-black mb-6">
								Sohan is a senior computer science major and avid believer in the magical healing powers of E-Fields.
								When not running, Sohan spends his time thinking of ways to improve his Strava presence in hopes of
								pursuing a career as a Strava influencer. Some other things Sohan loves are fried tofu, the mind goblin,
								his dog Sophie, and studying up on Club Running and Brian Lau lore. Sohan is also a big fan of professional
								running and always looking to hear your hot takes and race predictions. Recently Sohan has been interested
								in making custom singlets (sometimes lacking in quality but always made with love), so talk to him if you
								have any great singlet ideas.
							</p>
						</div>
					</div>

					<div className="bio-card"> {/*Image on the left*/}
						<div className="align-left md:w-1/2 md:order-2">
							<img src={lillianImage} alt="Lillian Pic" />
						</div>
						<div className="flex flex-col md:w-1/2 ml-5 mr-5">
							<h1 className="bio-content">Vice President: Lillian Hsu</h1>
							<p className="text-black mb-6">
								Lillian is a junior environmental science major from Germantown, Maryland. After working for a semester
								as an unpaid intern under the President Diana administration, she is now doing even more unpaid work
								but now as your Vice President! Outside of running, she enjoys art, crocheting, and Moge Tee.
								She can also be found taking pictures at meets (and pawning the camera off on unsuspecting club
								members when it's time for her race).
							</p>
						</div>
					</div>

					<div className="bio-card"> {/*Image on the left*/}
						<div className="align-left md:w-1/2">
							<img src={maxImage} alt="Max Pic" />
						</div>
						<div className="flex flex-col md:w-1/2 ml-5 mr-5">
							<h1 className="bio-content">Co-Treasurer: Max Worley</h1>
							<p className="text-black mb-6">
								Max is a senior mechanical engineering major who is learning how to fix things but should probably
								figure out how to fix his legs first. Aside from battling the injury demons, Max enjoys playing
								pretty much any other sport, hanging out with people, and midnight snacks. He would probably be down
								for van life, but he's fairly sure he wouldn't fit in the van lying down, so sleep would be
								an issue. As fundraising co-treasurer, Max is in charge of convincing as many other people as possible
								to give money to the club randomly so that you can go run meets!
							</p>
						</div>
					</div>


					<div className="bio-card"> {/*Image on the left*/}
						<div className="align-left md:w-1/2 md:order-2">
							<img src={jbImage} alt="JB Pic" />
						</div>
						<div className="flex flex-col md:w-1/2 ml-5 mr-5">
							<h1 className="bio-content">Co-Treasurer: Jacob Bush</h1>
							<p className="text-black mb-6">
								Jacob is a junior studying computer science. He ran for treasurer because he
								felt like managing more than the usual 2 digit number in his personal bank account.
								He is currently trying his best to fight tax fraud and a suppressed gambling addiction.
								When he's not frolicking in club funds he enjoys ice skating, impromptu sports,
								and most of all being with his friends. If you ever want to talk about life and all of
								its crazy intricacies you should go meet him!
							</p>
						</div>
					</div>


					<div className="bio-card"> {/*Image on the left*/}
						<div className="align-left md:w-1/2">
							<img src={domImage} alt="dom Pic" />
						</div>
						<div className="flex flex-col md:w-1/2 ml-5 mr-5">
							<h1 className="bio-content">Sprint Chair: Dominick Cardone</h1>
							<p className="text-black mb-6">
								Dominick is a junior computer science major from the beautiful, definitely not smelly,
								plains of New Jersey. When not running, he enjoys lifting weights, eating, experimenting
								with new recipies, and playing other sports. His favorite part of track, aside from all
								the amazing people, is getting to sleep and becoming a glutton after every meet.
								Whether you want to set a club record or just want to run with friends, I'll do my
								best to help you. Come to the track and run with the sprinters!
							</p>
						</div>
					</div>

					<div className="bio-card"> {/*Image on the left*/}
						<div className="align-left md:w-1/2 md:order-2">
							<img src={eamonImage} alt="eamon Pic" />
						</div>
						<div className="flex flex-col md:w-1/2 ml-5 mr-5">
							<h1 className="bio-content">Apparel Coordinator: Eamon Plante</h1>
							<p className="text-black mb-6">
								Eamon Plante, a junior computer science major, has been a club member since he was a freshman in 2020.
								Before attending UMD, he ran cross country and track at Sherwood High School and was a team captain.
								He also makes very lame bios
							</p>
						</div>
					</div>

					<div className="bio-card"> {/*Image on the left*/}
						<div className="align-left md:w-1/2">
							<img src={zachImage} alt="zach Pic" />
						</div>
						<div className="flex flex-col md:w-1/2 ml-5 mr-5">
					<h1 className="bio-content">Social Chair: Zach Kiedrowski</h1>
							<p className="text-black mb-6">
								Zach Kiedrowski is a third year member of the club and an Aberdeen High School
								alum. He is dual degreeing in environmental science and statistics. Zach started
								running his sophomore year of high school and fell in love the sport, acting as the captain
								of his track team his senior year. Zach ran 2:55:38 at the 2022 Baltimore Marathon and now
								has his sights set on cross country season and the Boston Marathon.
							</p>
						</div>
					</div>

					<div className="bio-card"> {/*Image on the left*/}
						<div className="align-left md:w-1/2 md:order-2">
							<img src={calebImage} alt="caleb Pic" />
						</div>
						<div className="flex flex-col md:w-1/2 ml-5 mr-5">
							<h1 className="bio-content">Webmaster: Caleb Holland</h1>
							<p className="text-black mb-6">
								Caleb Holland is a sophomore studying computer science. More commonly known as C Holland,
								Caleb is known for his absolutely breathtaking strava content, and crowning achievement
								as the 2023 hot sauce night co-champion. In his free time, Caleb ponders life's biggest questions,
								such as: "Should you salt your chocolate milk?" and "does pizza taste better upside down?"
								Talk to Caleb if you ever want to discuss fascinating topics such as these.
							</p>
						</div>
					</div>


					




        </div>
    );
}

export default About;
