import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App= ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
                author="Alexa" 
                timeAgo="Today at 6:45AM" 
                text="This is demo comment" 
                avatar= {faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Google" 
                timeAgo="Today at 1:15AM" 
                text="This is also demo comment" 
                avatar= {faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Siri" 
                timeAgo="Yesterday at 11:00PM" 
                text="This is not demo comment" 
                avatar= {faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Cortana" 
                    timeAgo="6 Days Ago" 
                    text="Is this demo comment" 
                    avatar= {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <h4>Hope you liked React</h4>
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App/>, document.querySelector("#root"));