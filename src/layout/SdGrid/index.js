import SdRow from './SdRow'
import SdCol from './SdCol'
import SdContainer from './SdContainer'

export default Vue => {
  Vue.component(SdCol.name, SdCol)
  Vue.component(SdContainer.name, SdContainer)
  Vue.component(SdRow.name, SdRow)
}
