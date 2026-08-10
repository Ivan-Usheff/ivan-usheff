import type { SkillType } from "../types"


export const Skills = (props: {skills: SkillType[]}) => {

	const skills = () => {
		if(props.skills.length === 0) 
			return null;
		return props.skills.map((skill, index) => {
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
					Tecnologías
				</h2>

				<div className="skills">

					{skills()}

				</div>

			</div>
		</section>
	)
}