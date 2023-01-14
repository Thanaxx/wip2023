import Particles from "react-tsparticles";
import ParticlesConfig from '../config/particles-config'

const ParticlesBackground = () => {
    return(
        <Particles params={ParticlesConfig} >
        </Particles>
    )
}

export default ParticlesBackground