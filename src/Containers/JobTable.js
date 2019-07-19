// import React from 'react';
// import JobComponent from '../Components/JobComponent';
//
// class JobTable extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             peopleArray: []
//         }
//     }
//
//     componentDidMount() {
//         this.setState({loading: true});
//         fetch("https://swapi.co/api/people/")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     loading: false,
//                     peopleArray: data.results
//                 })
//             })
//
//     }
//
//     render() {
//         const jobComponent = this.state.loading ? "loading..." : this.state.peopleArray.map(item =>
//             <JobComponent key={item.name} character={item} />);
//
//         return (
//             <div>
//
//                 {jobComponent}
//             </div>
//
//         )
//     }
// }
// export default JobTable;

import React from 'react';
import JobComponent from '../Components/JobComponent';

class JobTable extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            peopleArray: []
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch("https://swapi.co/api/people/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    peopleArray: data.results
                })
            })
    }

    renderTableData(){
        return this.state.peopleArray.map((people, index) => {
            const {name, height, mass, hair_color} = people
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{height}</td>
                    <td>{mass}</td>
                    <td>{hair_color}</td>
                </tr>
            )
        })
    }

    render() {
        /*const jobComponent = this.state.loading ? "loading..." : this.state.peopleArray.map(item =>
            <JobComponent key={item.name} character={item} />);*/

        return (
            <div>
                {jobComponent}
            </div>

        )
    }
}
export default JobTable;