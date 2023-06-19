/*
 * The Kanban React component
 */
import { Typography } from "@mui/material";
import img from "../../assets/img";
import React from "react";
import '../KanbanBoard/Kanboard.css'
import { Center } from "@chakra-ui/react";
class Kanban extends React.Component {
    render() {
        const style = {
            'padding': '30px',
            'paddingTop': '5px',
        };

        return (
            <div style={style}>
                <h1>Project Kanban Board</h1>
                <KanbanBoard />
            </div>
        );
    }
}

/*
 * The Kanban Board React component
 */
class KanbanBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            isLoading: true,
            projects: [],
            draggedOverCol: 0,
        });
        this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
        this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
        this.columns = [
            { name: 'To Do', stage: 1, imgs: img.ellipse1 },
            { name: 'On Progress', stage: 2, imgs: img.ellipse2 },
            { name: 'Done', stage: 3, imgs: img.ellipse3 },
        ];
    }

    componentDidMount() {
        this.setState({ projects: projectList, isLoading: false });
    }

    //this is called when a Kanban card is dragged over a column (called by column)
    handleOnDragEnter(e, stageValue) {
        this.setState({ draggedOverCol: stageValue });
    }

    //this is called when a Kanban card dropped over a column (called by card)
    handleOnDragEnd(e, project) {
        const updatedProjects = this.state.projects.slice(0);
        updatedProjects.find((projectObject) => { return projectObject.name === project.name; }).project_stage = this.state.draggedOverCol;
        this.setState({ projects: updatedProjects });
    }

    render() {
        if (this.state.isLoading) {
            return (<h3>Loading...</h3>);
        }

        return (
            <div>
                {this.columns.map((column) => {
                    return (
                        <KanbanColumn
                            name={column.name}
                            stage={column.stage}
                            projects={this.state.projects.filter((project) => { return parseInt(project.project_stage, 10) === column.stage; })}
                            onDragEnter={this.handleOnDragEnter}
                            onDragEnd={this.handleOnDragEnd}
                            key={column.stage}
                            img={column.imgs}
                        />
                    );
                })}
            </div>
        );
    }
}

/*
 * The Kanban Board Column React component
 */
class KanbanColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ mouseIsHovering: false });
    }

    componentWillReceiveProps(nextProps) {
        this.state = ({ mouseIsHovering: false });
    }

    generateKanbanCards() {
        return this.props.projects.slice(0).map((project) => {
            return (
                <KanbanCard
                    project={project}
                    key={project.name}
                    onDragEnd={this.props.onDragEnd}
                    imgs={this.props.img}
                />
            );
        });
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    render() {
        const columnStyle = {
            'display': 'inline-block',
            'verticalAlign': 'top',
            'marginRight': '10px',
            'marginBottom': '5px',
            'paddingLeft': '5px',
            'paddingTop': '0px',
            'width': '31.33%',
            'textAlign': 'center',
            'backgroundColor': '#F5F5F5',
            'padding': '20px',
        };
        return (
            <div className="main_card_col"
                style={columnStyle}
                onDragEnter={(e) => { this.setState({ mouseIsHovering: true }); this.props.onDragEnter(e, this.props.stage); }}
                onDragExit={(e) => { this.setState({ mouseIsHovering: false }); }}
            >
                <div style={{ 'borderBottom': '3px solid ' + this.getRandomColor(), 'paddingBottom':'10px', 'display': 'flex', "alignItems": "Center", "justifyContent": "space-between", }}>
                    <div className="Heading_name">
                    <img style={{'paddingRight':'8px'}} src={this.props.img} />
                        {this.props.name}
                        <span className="card_count">
                            {this.props.projects.length}
                        </span></div>
                    {this.props.name.toLowerCase() == 'to do' && <div style={{ 'display': 'flex', "alignItems": "Center", "justifyContent": "space-between" }}>
                        <img style={{ padding: '5px' }} src={img.addSquare} />
                        <p style={{ paddingBottom: '7px' }} >...</p>
                    </div>}

                </div>

                {this.generateKanbanCards()}
                <br />
            </div>);
    }
}

/*
 * The Kanban Board Card component
 */
class KanbanCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }

    render() {
        const cardStyle = {
            'padding': '15px',
            // 'paddingTop': '5px',
            'paddingBottom': '15px',
            'marginLeft': '0px',
            'marginRight': '5px',
            'marginBottom': '5px',
            'textAlign': 'left',
            'marginTop': '15px',
        };

        return (
            <div className="Main-card"
                style={cardStyle}
                draggable={true}
                onDragEnd={(e) => { this.props.onDragEnd(e, this.props.project); }}
            >
                <div style={{ 'display': 'flex', "alignItems": "Center", "justifyContent": "space-between", 'marginBottom': '10px' }}>
                    <img src={this.props.project.status} />
                    <div style={{ 'display': 'flex', "alignItems": "Center", "justifyContent": "space-between" }}>
                        <p style={{ paddingBottom: '7px' }} >{this.props.project?.dots}</p>
                    </div>
                </div>

                <div>
                    <h4 className="card_heading">{this.props.project.name}</h4>
                </div>

                <div className="card_desc">{this.props.project.description}<br /></div>
                <div style={{ display: "flex", width: 'auto', justifyContent: 'center' }}>
                    <img style={{ width: '100%' }} src={this.props.project?.image} />
                    <img style={{ marginLeft: '10px', width: '100%' }} src={this.props.project?.image1} /></div>
                <div
                    style={{ 'width': '100%' }}
                >
                    <Typography className="card_typo" marginTop={'20px'} color="#141414">
                        <div className="user_image">                            
                            <img
                                className="avater-image"
                                alt="profile user"
                                width="30px"
                                height="30px"
                                src={img.image2}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            /><img
                                className="avater-image"
                                alt="profile user"
                                width="30px"
                                height="30px"
                                src={img.image3}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                            <img
                                className="avater-image"
                                alt="profile user"
                                width="30px"
                                height="30px"
                                src={img.image4}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            />

                        </div>
                        <div className="innerbox_content">
                            <span style={{ 'float': 'right' }}>
                                <img style={{ 'width': '30px' }} src={img.message} />
                                comments
                            </span>
                            <span style={{ 'float': 'right' }}>
                                <img src={img.icon6} />
                                files
                            </span>
                        </div>
                    </Typography>
                </div>
            </div>
        );
    }
}

/*
 * Projects to be displayed on Kanban Board
 */
let projectList = [
    {
        status: img.low,
        name: 'Brainstorming',
        description: "Brainstorming brings team members' diverse experience into play.",
        project_stage: 1,
        head_image: img.ellipse1,
        addTask: img.addSquare,
        dots: "..."
    },
    {

        status: img.high,
        name: "Research",
        description: "User research helps you to create an optimal product for users.User research helps you to create an optimal product for users.",
        project_stage: 1,
        dots: "..."
    },
    {
        status: img.high,
        name: 'Wireframes',
        description: 'Low fidelity wireframes include the most basic content and visuals.',
        project_stage: 1,
        dots: "..."
    },
    {
        status: img.low,
        name: "Onboarding Illustrations ",
        image: img.todoimage1,
        project_stage: 2,
        head_image: img.ellipse2,
        dots: "..."
    },
    {
        status: img.low,
        name: "Moodboard",
        image: img.todoimage2,
        image1: img.todoimage3,
        project_stage: 2,
        dots: "..."
    },
    {
        status: img.complete,
        name: 'Mobile App Design',
        image1: img.todoimage4,
        project_stage: 3,
        head_image: img.ellipse3,
        dots: "..."
    },
    // {
    //     name: "Mobile App Design ",
    //     description: "Low fidelity wireframes include the most basic content and visuals.",
    //     project_stage: 3,
    // },
    {
        status: img.complete,
        name: 'Design System',
        description: 'It just needs to adapt the UI from what you did before  ',
        project_stage: 3,
        dots: "..."
    },
];

export default KanbanBoard;
