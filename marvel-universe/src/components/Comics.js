import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import{Link} from 'react-router-dom'

import {fetchComics} from '../store/actions';
import {
    Fade,
    Card,
    Button,
    CardImg,
    Spinner,
    CardText, 
    CardBody,
    CardTitle} from 'reactstrap'
import { comicReducer } from '../store/reducers/comicReducer';

const Comics = (props)=>{
    const {fetchingComics,fetchComics,hero} = props
    useEffect(()=>{
        fetchComics(hero.comics.collectionURI)
        

        
    },[])
    return (
        <div style={{}}>
            {fetchingComics&& <Spinner style={{position:'absolute', top:'20%',left:'49%'}}color="primary" />}
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
                className='mt-5'>Marvel Comics</Fade>
                </Link>
                <Fade style={{
                margin:'0 auto',
                color:'white', 
                fontSize:'3rem', 
                width:'25%', 
                textShadow:'2px 2px black', 
                backgroundColor:'red', 
                fontWeight:'900',
                textAlign:'center'}}
                tag='h3' 
                className=' mb-5'>{`Featuring ${hero.name}`}</Fade>
            
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                {props.comics&& props.comics.map(comic=>{
                    return (
                        <Card key={comic.id} className='mb-5' style={{width:'45%',boxShadow:'3px 3px gray'}}>
                            <CardImg 
                                top 
                                width='15vw'
                                height='625vh'
                                src={`${comic.thumbnail.path}.jpg`}
                                href='https://www.marvel.com/'
                                />
                            <CardBody>
                                <CardTitle style={{fontWeight:'bold'}}>{` ${comic.title}`}</CardTitle>
                                <>
                                    
                                    {
                                        comic.format === ''?//if 'comic.format' is an empty string
                                        null ://<= do this - else
                                        <p><span style={{color:'red', fontWeight:'bold'}}>Format:</span>{` ${comic.format}`}</p>//do this
                                    }
                                    {
                                        comic.diamondCode === ''?//if 'comic.diamondCode' is an empty string
                                        null ://<= do this - else
                                        <p><span style={{color:'red', fontWeight:'bold'}}>Diamond Issue:</span>{` ${comic.diamondCode}`}</p>//do this
                                    }
                                    {/* {
                                        comic.upc === ''? // if 'comic.upc' is an empty string
                                        null ://<= return nothing - else
                                        <p><span style={{color:'red', fontWeight:'bold'}}>UPC Barcode:</span>{` ${comic.upc}`}</p>// return this
                                    } */}
                                    {
                                        comic.prices[0].price === 0?//if 'comic.price' is zero
                                        null ://<= return nothing - else
                                        <p><span style={{color:'red', fontWeight:'bold'}}>Price:</span>{` ${comic.prices[0].price}`}</p>// return this
                                    }
                                    <span style={{color:'red', fontWeight:'bold'}}>Characters:</span>
                                    {
                                        comic.characters.items.length === 0?//if the 'comic.characters.items' array is empty
                                        null : //<= return nothing - else
                                        comic.characters.items.map(item=>(<div key={item.name}><li className='mb-1'>{` ${item.name}`}</li></div>))// return this
                                    }
                                    {/* {
                                        comic.description === null ? //if 'comic description is null
                                        null ://<= return nothing - else
                                        <p><span style={{color:'red', fontWeight:'bold'}}>Description:</span>{` ${comic.description}`}</p>// return this
                                    } */}
                                    
                                </>
                                
                                <Button style={{boxShadow:'2px 2px black', textShadow:'2px 2px black'}} href={comic.urls[0].url} color='danger'>More Info</Button>
                                {/* {comic.description&&} */}
                                

                            </CardBody>
                            
                            </Card>
                        )}
                    )
                }
            </div>
        </div>
    )


}
const mapStateToProps= (state) =>{
    console.log(state)
    return{
        ...state,
        fetchingComics:state.fetchingComics,
        comics:state.comics,
        hero:state.hero

    }
}

export default connect(mapStateToProps,{fetchComics})(Comics);