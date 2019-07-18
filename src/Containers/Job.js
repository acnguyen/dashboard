import React from 'react';
import JobComponent from '../Components/JobComponent';

class Job extends React.Component {
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

    render() {
        const jobComponent = this.state.loading ? "loading..." : this.state.peopleArray.map(item =>
            <JobComponent key={item.name} character={item} />);

        return (
            <div>
                {jobComponent}
            </div>

        )
    }
}
export default Job;