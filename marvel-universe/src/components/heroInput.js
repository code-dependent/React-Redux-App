import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchHero} from '../store/actions';
import {Spinner,Button} from 'reactstrap';
import {Link} from 'react-router-dom';


const HeroInput = props =>{
    const [heroInput, setHeroInput] = useState('')
    const {
        fetchHero,
        fetchingHero
    } = props

    useEffect(()=>{
        setHeroInput(heroInput)
        fetchHero(heroInput)

    },[heroInput])




    const changeHandle = (e)=>{
        setHeroInput(e.target.value)
    }
    

    

    return(
        <div style={{
            background:'white',
            margin:'0 auto',
            height:'25vh',
            width:'75%',
            textAlign:'center',
            borderRadius:'10px'}}>

            <h1 className='mt-20'>Look Up Your Favorite Marvel Character</h1>
            
            
            <form>
                <input
                    type='text'
                    value={heroInput}
                    onChange={changeHandle}
                    placeholder='Enter a Marvel Hero!'
                    />
                    <Link to='/hero'>
                    <Button color='danger'>Search</Button>
                    </Link>
            </form>
            
            
            {fetchingHero && <Spinner/>}
        </div>
    )
}

const mapStateToProps = (state)=>{

    return{
        fetchingHero:state.fetchingHero

    }

}

export default connect(mapStateToProps,{fetchHero})(HeroInput);