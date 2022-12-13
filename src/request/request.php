<?php
require "connection.php";
$conn = $GLOBALS['conn'];        
switch ($_REQUEST['action']) {
    case 'insert':{        
        $sql = "insert into Attivita_lavoro (data,ora_ini) values('".$_REQUEST['data']."','".$_REQUEST['ora_ini']."')"; 
        var_dump($sql);        
        $res = $conn->query($sql);                    
        header('Location:../index.html');        
        break;
    }
    case 'update':{        
        $sql = "update Attivita_lavoro set nominativo='".$_REQUEST['nominativo']."',persone='".$_REQUEST['persone']."' where id='".$_REQUEST['id']."'";        
        $res = $conn->query($sql);                    
        header('Location:../index.html');        
        break;
    }
    case 'select':{
        $string = create_Date($_REQUEST['data']);
        $sql = "select * from Attivita_lavoro where data between ".$string." order by data";                
        $res = $conn->query($sql);
        $result=[];
        if ($res) {
            while ($row = $res->fetch_assoc()){
                $result[]=$row;
            }
        }        
        echo json_encode($result);    
        break;
    }
    case 'confirm':{
        $sql = "select * from Attivita_lavoro where id='".$_REQUEST['id']."'";                
        $res = $conn->query($sql);                    
        $result = $res->fetch_assoc();
        $diff = date_diff(date_create($result['ora_ini']), date_create($_REQUEST['ora_fine']));
        $ore_lavoro = $diff->format("%H:%I:%S");
        $minuti = (intval(substr($ore_lavoro,0,2)) * 60) + intval(substr($ore_lavoro,3,2));
        $prezzo = ($minuti / 60) * 7;                
        $sql = "update Attivita_lavoro set ora_fine='".$_REQUEST['ora_fine']."',prezzo='".$prezzo."',ore='".$ore_lavoro."' where id='".$_REQUEST['id']."'";                                
        $res = $conn->query($sql);                    
        header('Location:../index.html');        
        echo json_decode('ok');
        break;
    }   
}

function create_Date($dato){
    if (strlen($dato) === 6 ){
        $anno = substr($dato,2,4);        
        switch (substr($dato,0,1)){
            case '1':{
                $string = "'".$anno."-01-01' and '".$anno."-01-31'";
                break;
            }
            case '2':{
                $string = "'".$anno."-02-01' and '".$anno."-02-28'";
                break;
            }
            case '3':{
                $string = "'".$anno."-03-01' and '".$anno."-03-31'";
                break;
            }
            case '4':{
                $string = "'".$anno."-04-01' and '".$anno."-04-30'";
                break;
            }
            case '5':{
                $string = "'".$anno."-05-01' and '".$anno."-05-31'";
                break;
            }
            case '6':{
                $string = "'".$anno."-06-01' and '".$anno."-06-30'";
                break;
            }
            case '7':{
                $string = "'".$anno."-07-01' and '".$anno."-07-31'";
                break;
            }
            case '8':{
                $string = "'".$anno."-08-01' and '".$anno."-08-31'";
                break;
            }
            case '9':{
                $string = "'".$anno."-09-01' and '".$anno."-09-30'";
                break;
            }
        };
    } else {
        $anno = substr($dato,3,4);        
        switch (substr($dato,0,2)){
            case '10':{
                $string = "'".$anno."-10-01' and '".$anno."-10-31'";
                break;
            }
            case '11':{
                $string = "'".$anno."-11-01' and '".$anno."-11-30'";
                break;
            }
            case '12':{
                $string = "'".$anno."-12-01' and '".$anno."-12-31'";                                                                        
                break;
            }
        };
    };        
    return $string;
}