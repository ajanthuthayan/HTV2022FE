
import { User } from '@nextui-org/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FollowedCarousel () {
    const pepe = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
    const responsive = [
        {
          breakpoint: 3000,
          settings:{
            slidesToShow: 8
          }
        },
        {
          breakpoint: 1500,
          settings:{
            slidesToShow: 5
          }
        },
        {
            breakpoint: 1024,
            settings:{
              slidesToShow: 4
            }
          },
        {
          breakpoint: 464,
          settings:{
            slidesToShow: 2
          }
        },
        {
          breakpoint: 0,
          settings:{
            slidesToShow: 1
          }
          
        }
    ];
    var testUsers = [
        {
            id:1,
            name:'Aiden Jolley-Ruhn',
            isActive: true,
            currentlyWatching:'Avatar',
            imgUrl:pepe,
        },
        {
            id:2,
            name:'Tom Hanks',
            isActive: true,
            currentlyWatching:'Forest Gump',
            imgUrl:pepe,
        },
        {
            id:3,
            name:'Travis Gerrit',
            isActive: false,
            currentlyWatching:'Avatar',
            imgUrl:pepe,
        },
        {
            id:4,
            name:'Leonardo Di Caprio',
            isActive: true,
            currentlyWatching:'Great Gatsby',
            imgUrl:pepe,
        },
        {
            id:4,
            name:'Selena Gomez',
            isActive: true,
            currentlyWatching:'Avatar',
            imgUrl:pepe,
        },
        {
            id:5,
            name:'Kanye West',
            isActive: true,
            currentlyWatching:'Baby momma',
            imgUrl:pepe,
        },
        {
            id:6,
            name:'Pete Davidson',
            isActive: true,
            currentlyWatching:'Movies',
            imgUrl:pepe,
        },
        {
            id:7,
            name:'Selena Gomez',
            isActive: true,
            currentlyWatching:'Avatar',
            imgUrl:pepe,
        },
        {
            id:8,
            name:'Kanye West',
            isActive: true,
            currentlyWatching:'Baby momma',
            imgUrl:pepe,
        },
        {
            id:9,
            name:'Pete Davidson',
            isActive: true,
            currentlyWatching:'Movies',
            imgUrl:pepe,
        },
        {
            id:10,
            name:'Selena Gomez',
            isActive: true,
            currentlyWatching:'Avatar',
            imgUrl:pepe,
        },
        {
            id:11,
            name:'Kanye West',
            isActive: true,
            currentlyWatching:'Baby momma',
            imgUrl:pepe,
        },
        {
            id:12,
            name:'Pete Davidson',
            isActive: true,
            currentlyWatching:'Movies',
            imgUrl:pepe,
        },
    ]
    var settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0.1,
        responsive:responsive,
        arrows: false,
        draggable: true,
        focusOnSelect: true,
        swipeToSlide: true,
        cssEase: "linear"
    };
    
    return (
        <div
             
            className='followers-box'>
            <Slider {...settings} style={{
                width:'80%', 
                margin: 'auto',
                borderRadius: '2vw',
                padding: '0.5vw'
            }}>
                {
                    testUsers.map((user) => {
                        return (
                            <div key={user.id} className='user-box'>
                                <User 
                                    bordered
                                    src={user.imgUrl}
                                    name={user.name}
                                    description={user.isActive ? user.currentlyWatching : ''}
                                    color={user.isActive ? 'success' : 'error'}
                                />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}