function hitung() {
    var x = document.getElementById('bilangan').value;
    if (x <= 14 || x >= 100000) {
        window.alert("Masukkan angka antara 15 - 99999");
    } else {
        if (x % 2 == 0) {
            y = x / 2;
            range = (y - 4) - 2;
            a = Math.floor((Math.random() * range) + 4);
            b = Math.floor((Math.random() * range) + 4);
            c = y - a;
            d = y - b;
            e = d - 3;
            f = c + 3;
            g = b - 1;
            h = a + 1;
            i = b + 1;
            j = a - 1;
            k = d - 1;
            l = c + 1;
            m = c + 2;
            n = d - 2;
            o = a + 2;
            p = b - 2;
        } else {
            y = (x / 2) + 0.5;
            range = (y - 4) - 2;
            a = Math.floor((Math.random() * range) + 4);
            c = Math.floor((Math.random() * range) + 4);
            b = y - a - 1;
            d = y - c;
            e = d - 3;
            f = c + 3;
            g = b - 1;
            h = a + 1;
            i = b + 1;
            j = a - 1;
            k = d - 1;
            l = c + 1;
            m = c + 2;
            n = d - 2;
            o = a + 2;
            p = b - 2;
        }
        document.getElementById('angka').innerHTML = x;
        document.getElementById('c11').innerHTML = a;
        document.getElementById('c12').innerHTML = b;
        document.getElementById('c13').innerHTML = c;
        document.getElementById('c14').innerHTML = d;
        document.getElementById('c21').innerHTML = e;
        document.getElementById('c22').innerHTML = f;
        document.getElementById('c23').innerHTML = g;
        document.getElementById('c24').innerHTML = h;
        document.getElementById('c31').innerHTML = i;
        document.getElementById('c32').innerHTML = j;
        document.getElementById('c33').innerHTML = k;
        document.getElementById('c34').innerHTML = l;
        document.getElementById('c41').innerHTML = m;
        document.getElementById('c42').innerHTML = n;
        document.getElementById('c43').innerHTML = o;
        document.getElementById('c44').innerHTML = p;
    }
}
