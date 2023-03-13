import  React,{Component} from 'react';


 function TimelinePost() {
    return (
    <div className='form-signup'>
        <div class="ui card align-center">
        <div class="content flex">
            <h5> Yagnik Parikh</h5>
            <div class="right floated meta">14h</div>
            <img class="ui avatar image" src="https://png.pngtree.com/png-clipart/20221207/ourlarge/pngtree-business-man-avatar-png-image_6514640.png" /> 
        </div>
        <div class="image">
            <img src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-avatar-a-man-with-green-flannel-png-image_6929375.png"/>
        </div>
        <div class="content">
            <span class="right floated">
            <i class="heart outline like icon"></i>
            17 likes
            </span>
            <i class="comment icon"></i>
            3 comments
        </div>
        <div class="extra content">
            <div class="ui large transparent left icon input">
            <i class="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..."/>
            </div>
        </div>
        </div>
    </div>
  );
}


export default TimelinePost;