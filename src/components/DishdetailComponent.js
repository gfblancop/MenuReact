import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
}

function RenderComments({dish}) {
    if (dish != null) {
        const dishComments = dish.comments.map((comment) => {
            return (
                <div>
                    <h5>{comment.comment}</h5>
                    <h5>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</h5>
                </div>
            );
        });

        return(
            <div className="container">
                <h4>Comments</h4>
                {dishComments}
            </div>
        )
    }
    else 
        return (<div></div>);
}

const  DishDetail = (props) => {
    const dish = props.dish;

        return (
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={dish} />
                    </div>
                </div>
            </div>
        );
}

export default DishDetail;