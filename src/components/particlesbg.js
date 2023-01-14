import Particles from "react-tsparticles";
import ParticlesConfig from '../config/particles-config'

const ParticlesBackground = () => {
    return(
        <Particles params={ParticlesConfig} >
        <h1>Hello</h1>
        </Particles>
    )
}

export default ParticlesBackground