


export const keys = (k = "")=>{
    return String(k).trim()
    .replaceAll('.','_')
    .replaceAll('#','_')
    .replaceAll('$','_')
    .replaceAll('[','(')
    .replaceAll(']',')')
}

export const keyValue = ({id, option})=>{
    const productId = keys(id)
    const opt = keys(option ?? "");
    // const col
    return [productId, opt].filter(Boolean).join('_'); 
}