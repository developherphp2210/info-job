
export const MONTHS = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

export function SetInitialControlData(){
    const now = new Date();
    localStorage.setItem('tot_prezzo','0');
    return `${(now.getMonth() + 1)}-${now.getFullYear()}`;
}


export function Create_Time(now){
    const Ora = String(now.getHours());
    const Minuti = String(now.getMinutes());
    return (Ora.length===1?'0'+Ora:Ora)+':'+(Minuti.length===1?'0'+Minuti:Minuti);
}

export function Create_Data_App(now){                      
    const Day = String(now.getDate()); 
    const Mese = String(now.getMonth()+1);            
    return now.getFullYear()+'-'+(Mese.length===1?'0'+Mese:Mese)+'-'+(Day.length===1?'0'+Day:Day); 
}


export function Create_Data(Newdata){
    const now = new Date(Newdata);                      
    const Day = String(now.getDate()); 
    const Mese = String(now.getMonth()+1);
    return (Day.length===1?'0'+Day:Day)+'/'+(Mese.length===1?'0'+Mese:Mese)+'/'+now.getFullYear();                        
}

export function Gestione_Prezzo(prezzo){
    let tot_prezzo = parseFloat(localStorage.getItem('tot_prezzo'));
    tot_prezzo += parseFloat(prezzo);
    localStorage.setItem('tot_prezzo',tot_prezzo);     
    return parseFloat(prezzo).toFixed(2).replace('.',','); 
}