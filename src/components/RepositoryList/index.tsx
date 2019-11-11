import React from 'react'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'
import { Repository } from '../../store/duckus/repositories/types'
import { bindActionCreators, Dispatch } from 'redux'
import * as RepositoriesAction from '../../store/duckus/repositories/actions'

interface StatProps {
  repositories: Repository[];
}
interface DispathProps {
  loadRequest(): void
}

type Props = StatProps & DispathProps

class RepositoryList extends React.Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props
    loadRequest()
  }
  render() {
    const { repositories } = this.props
    return <ul>{repositories.map(rep => <li key={rep.id}>{rep.name}</li>)}</ul>
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesAction, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)