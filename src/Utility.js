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
    // tot_prezzo += parseFloat(prezzo); 
    return parseFloat(prezzo).toFixed(2).replace('.',','); 
}


