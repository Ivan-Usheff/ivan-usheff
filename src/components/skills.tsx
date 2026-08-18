import type { SkillPropsType } from "../types"


export const Skills = (props: SkillPropsType) => {

	const { skills, ui } = props

	const skillsRender = () => {
		if(skills.length === 0) 
			return null;
		return skills.map((skill, index) => {
			const { name, level, experience } = skill;
			return (
				<span key={index}>{name} {level ? `(${level})` : ''} {experience && `(${experience} años)`}</span>
			)
		})
	}

	return (
		<section id="skills" className="section section-alt">
			<div className="container">

				<h2 className="section-title">
					{ui}
				</h2>

				<div className="skills">

					{skillsRender()}

				</div>

			</div>
		</section>
	)
}