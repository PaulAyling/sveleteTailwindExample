// UTILS
const getParentId = (childId) =>{
	const findId = (id,myarr)=>{
	let res
	for (let i = 0; i < myarr.length; i++) {
		if(myarr[i].id == id ) return true
		}
	return false
	}
	const snapshot=get(cardLayout)
	for (const key in snapshot) {
  	let nodeArr = snapshot[key].items
		if(findId(childId,nodeArr) == true) {
			return key
		}
	}
}