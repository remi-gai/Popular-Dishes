import React from "react";
import styled from "styled-components";
import ReviewEntry from "./ReviewEntry.jsx";

const ModalContainer = styled.div`
    display:flex;
    background:white;
    flex-direction: row;
    border: 1px solid;
    border-radius:6px;
    width: 1300px;
    height: 730px;
`;

ModalContainer.displayName = "ModalContainer";

const LeftContainer = styled.div`
    width: 940px;
    height: 730px;
    display:flex;
    justify-content: center;
    flex-direction: column;
`;

LeftContainer.displayName = "LeftContainer";

const RightContainer = styled.div`
    display: flex;
    background: white;
    justify-content: center;
    flex-direction: column;
    width: 360px;
    height: 730px;
`;

RightContainer.displayName = "RightContainer";

const DishPicture = styled.img`
    display:flex;
    justify-content: center;
    width: 940px;
    height: 700px;
`;

const PictureContainer = styled.div`
    display:flex;
    justify-content: center;
`;

DishPicture.displayName = "DishPicture";

const StartOrder = styled.button`
    width: 300px;
    height: 36px;
    color:white;
    background-color: #d32323;
`;

const Reviews = styled.div`
    overflow-y: scroll;
    height: 450px;
`;

const Description = styled.span`
    color: white;
`;

const PhotoCount = styled.span`
    color: white;
`;

const FooterComment = styled.div`
    display: flex;
    justify-content: space-between;
    height: 53px;
    background: rgba(0,0,0,.5);
`;

const ChangePhotoControls = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
`;

const BottomContainer = styled.div`
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`;

const RightContent = styled.div`
    padding: 30px;
`;

const NextPhotoButton = styled.input`
    margin-left: 909px;
    margin-top: -36px;
    cursor: pointer;
    width: 17px;
`;

const PreviousPhotoButton = styled.input`
    margin-left: 15px;
    width: 17px;
    cursor: pointer;
`;

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.dish === undefined) {
            var modal = '';
        } else {
            var modal = <ModalContainer>
                <LeftContainer>
                    <PictureContainer>
                        <DishPicture src={this.props.dish['photos'][this.props.currentPhotoIndex].URL}></DishPicture>
                    </PictureContainer>
                    <ChangePhotoControls>
                        <PreviousPhotoButton type="image" src="./icons/leftArrow.svg" onClick={(e) => this.props.handlePreviousPhoto(e, this.props.dish['photos'].length)}></PreviousPhotoButton>
                        <NextPhotoButton type="image" src="./icons/rightArrow.svg" onClick={(e) => this.props.handleNextPhoto(e, this.props.dish['photos'].length)}></NextPhotoButton>
                    </ChangePhotoControls>
                    <FooterComment>
                        <Description>{this.props.dish['photos'][this.props.currentPhotoIndex].description}</Description>
                        <PhotoCount>{this.props.currentPhotoIndex + 1} of {this.props.dish['photos'].length}</PhotoCount>
                    </FooterComment>
                </LeftContainer>
                <RightContainer>
                    <RightContent>
                        <h2 className="title">{this.props.dish['dishName']}</h2>
                        <div className="price">{this.props.dish['dishPrice']}</div>
                        <div className="ingredients">{this.props.dish['ingredients']}</div>
                        <div className="reviewsCount">Reviews ({this.props.dish['reviews'].length})</div>
                        <Reviews>
                            {this.props.dish['reviews'].map((review, index) => <ReviewEntry review={review} key={index} />)}
                        </Reviews>
                    </RightContent>
                    <BottomContainer>
                        <StartOrder>Start Order</StartOrder>
                    </BottomContainer>
                </RightContainer>
            </ModalContainer>
        }

        return <div>
            {modal}
        </div>
    }
}

export default DishDetail;