
import React from 'react';
import {connect} from 'react-redux';
import {fetchHero} from '../store/actions';
import {Link} from 'react-router-dom'
import {

    Card,
    Fade,
    Button,
    CardImg,
    Spinner,
    CardText, 
    CardBody,
    CardTitle} from 'reactstrap'


const Hero = props =>{
    const{
        hero,
        fetchingHero,
        heroFailMsg,
    } = props


    return(
        <div>
            <Link to='/'>
            <Fade style={{
                margin:'0 auto',
                color:'white', 
                fontSize:'3rem', 
                width:'25%', 
                textShadow:'2px 2px black', 
                backgroundColor:'red', 
                fontWeight:'900',
                textAlign:'center'}}
                tag='h1' 
                className='mt-5 mb-5'>Marvel Hero</Fade>
                </Link>
            {heroFailMsg && <h1>{heroFailMsg}</h1>}
            {fetchingHero? (<Spinner/>):(
            <Card className='mt-0 mb-5 ml-auto mr-auto' style={{width:'75%',}}>
                <CardTitle style={{textAlign:'center'}}><h1>{hero.name}</h1></CardTitle>
                <CardImg href='https://www.marvel.com/' top width='100%' src={`${hero.thumbnail.path}.jpg`}/>
                <CardBody>
                    <CardText>
                        {hero.description}
                    </CardText>
                    <Link to='comics'>
                        <Button>Comics</Button>
                    </Link>
                </CardBody>

            </Card>)}

        </div>
        )
}

const mapStateToProps = (state)=>{

    return{
        ...state,
        hero:state.hero,
        heroFailMsg:state.heroFailMsg,
        fetchingHero:state.fetchingHero


    }

}

export default connect(mapStateToProps,{fetchHero})(Hero)