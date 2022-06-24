class spaceshipWeapon {
    constructor(identtifier) {
        this.identtifier = identtifier,
            this.shotsLeft = 5
    }

    shoot() {
        if (this.shotsLeft > 0) {
            console.log("Bang!");
            this.shotsLeft--;
        } else {
            throw new Error("Arma: " + this.identtifier + ", sem munição.");
            //Com essa declaração, podemos lançar nosso próprio erro nos consoles, com base em alguma verificação/autenticação
        }

    }

    reload() {
        this.shotsLeft = 5;
    }
}

let apolloWeapon = new spaceshipWeapon(10);
try { // Depois de criarmos nosso error, podemos também traálo dentro dessa estrutura, o try' como o nome ja diz
    //Tentará identificar um erro dentro do cógido passado nele
    apolloWeapon.shoot();
    apolloWeapon.shoot();
    apolloWeapon.shoot();
    apolloWeapon.shoot();
    apolloWeapon.shoot();
    apolloWeapon.shoot();
} catch (e) { // Caso ele encontre, então o catch' assume executando seu bloco a fim de solucionar o erro
    //Lembrando que o erro é sempre armazenado nesse parâmetro 'e'
    console.log(e.message);
    apolloWeapon.reload();
} finally { // E o finally é um bloco que sempre será executado, achando erro ou não.
    console.log("Você efetuou bons disparos");
}

console.log(apolloWeapon);