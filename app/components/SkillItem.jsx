import Image from "next/image"

const SkillItem = ({ logoImg, logoName }) => {
    return (
        <div
            className="grid grid-cols-2 gap-6 justify-center items-center"

        >
            <div className="m-auto">

                <Image
                    src={logoImg}
                    alt={logoName}
                    width={64}
                    height={64} />

            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>{logoName}</h3>
            </div>
        </div>
    )
}

export default SkillItem