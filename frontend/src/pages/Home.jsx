import {Fragment} from 'react';
//import {Link} from 'react-router-dom';
//import {StyledSmallBox} from '../style/Home'
import Posts from '../components/Posts/index'
import Navbar from '../components/Navbar/index'
import Searchbar from '../components/Searchbar';
//import NewPost from '../components/Newpost';
import {useEffect} from 'react'
import {StyledFragment} from '../style/Home'

const Home = () => {
useEffect(() => {
    console.log('home')
}, [])

    return (
        <StyledFragment>
            <Navbar />
            <Searchbar />
            <Posts />
        </StyledFragment>
    )
}

export default Home;