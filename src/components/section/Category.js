import React from "react";

import CategoryCard from './../parts/CategoryCard';
import CaptionWrap from './../parts/Caption';
import Button from './../buttons/Button';
import H1 from '../headers/H1';
import ContainerCatagory from './../parts/Contain';
import Position from './../parts/PositionContainer';
import { Link } from 'react-router-dom';
import Par from './../parts/Paragraph';

export default function Category(props) {
    console.log("Props category", props);
    return (
        <ContainerCatagory>
            {props.category &&  props.category.map((item, index) => {
                return (
                    <CategoryCard key={index} index={index + 1}>
                        <img src={item.metadata.img.url} alt="img" index={index+1}/>
                        <CaptionWrap index={index+1}>
                            <Position index={index+1}>
                                <H1 isBig>{item.title}</H1>
                                <Par dangerouslySetInnerHtml={{__html:item.content}}></Par>
                                <Link to={'/' + item.slug}><Button >See more</Button></Link>
                            </Position>
                        </CaptionWrap>
                    </CategoryCard>
                )
            })}
        </ContainerCatagory>
    )
}