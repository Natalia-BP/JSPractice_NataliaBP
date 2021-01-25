
//fix this function:
function startCounting()
{
	var counter = 100;
	while(counter >= 0)
	{
        console.log(counter);
        counter = counter - 1; 
        // Esto tiene que ir abajo del console.log porque si no, para cuando imprime en la pantalla le quita -1 y lo imprime 99 veces en vez de 100
	}
	
	return counter;
}

startCounting();