import React from "react";
import logo from "../media/images/lonexLogo.png";


export default function About() {
	return (
		<div className="flex justify-center items-center flex-col h-screen bg-secondary">
			<div class="py-16">
				<div class="container m-auto px-6 text-primary md:px-12 xl:px-6">
					<div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
						<div class="md:5/12 lg:w-5/12">
							<img
								src={logo}
								alt="about"
							/>
						</div>
						<div class="md:7/12 lg:w-6/12">
							<h2 class="text-2xl text-primary font-bold md:text-4xl">
								Lonex is carried out by passionate developers
							</h2>
							<p class="mt-6 text-primary">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
								omnis voluptatem accusantium nemo perspiciatis delectus atque
								autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
								consequatur! Officiis id consequatur atque doloremque!
							</p>
							<p class="mt-4 text-primary">
								Nobis minus voluptatibus pariatur dignissimos libero quaerat
								iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
								aspernatur quam mollitia.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
