export function getModuleBackground(blok: any){

    let bgcolor = '';

    if(blok.backgroundcolor){
        bgcolor = blok.backgroundcolor;
    }

    return bgcolor !== '' ? `background: #${bgcolor};` : '';

}