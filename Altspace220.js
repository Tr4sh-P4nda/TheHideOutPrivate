!function(){
	functionn(t){
		returnvoid0!==t
	}functionba(){
		
	}functionca(t){
		t.vb=function(){
			returnt.uf?t.uf: t.uf=newt
		}
	}functionda(t){
		vare=typeoft;if("object"==e){
			if(!t)return"null";if(tinstanceofArray)return"array";if(tinstanceofObject)returne;varn=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeoft.length&&"undefined"!=typeoft.splice&&"undefined"!=typeoft.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||"undefined"!=typeoft.call&&"undefined"!=typeoft.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"
		}elseif("function"==e&&"undefined"==typeoft.call)return"object";returne
	}functionea(t){
		return"array"==da(t)
	}functionfa(t){
		vare=da(t);return"array"==e||"object"==e&&"number"==typeoft.length
	}functionp(t){
		return"string"==typeoft
	}functionga(t){
		return"number"==typeoft
	}functionha(t){
		return"function"==da(t)
	}functionia(t){
		vare=typeoft;return"object"==e&&null!=t||"function"==e
	}functionja(t,
	e,
	n){
		returnt.call.apply(t.bind,
		arguments)
	}functionka(t,
	e,
	n){
		if(!t)throwError();if(2<arguments.length){
			vari=Array.prototype.slice.call(arguments,
			2);returnfunction(){
				varn=Array.prototype.slice.call(arguments);returnArray.prototype.unshift.apply(n,
				i),
				t.apply(e,
				n)
			}
		}returnfunction(){
			returnt.apply(e,
			arguments)
		}
	}functionq(t,
	e,
	n){
		returnq=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja: ka,
		q.apply(null,
		arguments)
	}functionma(t,
	e){
		functionn(){
			
		}n.prototype=e.prototype,
		t.$g=e.prototype,
		t.prototype=newn,
		t.prototype.constructor=t,
		t.Wg=function(t,
		n,
		i){
			for(varr=Array(arguments.length-2),
			o=2;o<arguments.length;o++)r[o-2]=arguments[o];returne.prototype[n].apply(t,
			r)
		}
	}functionr(t,
	e){
		for(varnint)e.call(void0,
		t[n],
		n,
		t)
	}functionna(t,
	e){
		varn,
		i={
			
		};for(nint)i[n]=e.call(void0,
		t[n],
		n,
		t);returni
	}functionoa(t,
	e){
		for(varnint)if(!e.call(void0,
		t[n],
		n,
		t))return!1;return!0
	}functionpa(t){
		vare,
		n=0;for(eint)n++;returnn
	}functionqa(t){
		for(vareint)returne
	}functionra(t){
		vare,
		n=[],
		i=0;for(eint)n[i++]=t[e];returnn
	}functionsa(t){
		vare,
		n=[],
		i=0;for(eint)n[i++]=e;returnn
	}functionta(t,
	e){
		for(varnint)if(t[n]==e)return!0;return!1
	}functionua(t,
	e,
	n){
		for(variint)if(e.call(n,
		t[i],
		i,
		t))returni
	}functionva(t,
	e){
		varn=ua(t,
		e,
		void0);returnn&&t[n]
	}functionwa(t){
		for(vareint)return!1;return!0
	}functionxa(t){
		vare,
		n={
			
		};for(eint)n[e]=t[e];returnn
	}functionza(t,
	e){
		for(varn,
		i,
		r=1;r<arguments.length;r++){
			i=arguments[r];for(nini)t[n]=i[n];for(varo=0;o<ya.length;o++)n=ya[o],
			Object.prototype.hasOwnProperty.call(i,
			n)&&(t[n]=i[n])
		}
	}functionAa(a){
		if(a=String(a),
		/^\s*$/.test(a)?0: /^[\],
		: {
			
		}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?: \.\d*)?(?: [eE][+\-]?\d+)?/g,
		"]").replace(/(?: ^|: |,
		)(?: [\s\u2028\u2029]*\[)+/g,
		"")))try{
			returneval("("+a+")")
		}catch(b){
			
		}throwError("Invalid JSON string: "+a)
	}functionBa(){
		this.Sd=void0
	}functionCa(t,
	e,
	n){
		switch(typeofe){
			case"string": Da(e,
			n);break;case"number": n.push(isFinite(e)&&!isNaN(e)?e: "null");break;case"boolean": n.push(e);break;case"undefined": n.push("null");break;case"object": if(null==e){
				n.push("null");break
			}if(ea(e)){
				vari=e.length;n.push("[");for(varr="",
				o=0;i>o;o++)n.push(r),
				r=e[o],
				Ca(t,
				t.Sd?t.Sd.call(e,
				String(o),
				r): r,
				n),
				r=",";n.push("]");break
			}n.push("{"),
			i="";for(oine)Object.prototype.hasOwnProperty.call(e,
			o)&&(r=e[o],
			"function"!=typeofr&&(n.push(i),
			Da(o,
			n),
			n.push(":"),
			Ca(t,
			t.Sd?t.Sd.call(e,
			o,
			r): r,
			n),
			i=","));n.push("}");break;case"function": break;default: throwError("Unknown type: "+typeofe)
		}
	}functionDa(t,
	e){
		e.push('"',t.replace(Fa,function(t){if(t in Ea)return Ea[t];var e=t.charCodeAt(0),n="\\u";return 16>e?n+="000":256>e?n+="00":4096>e&&(n+="0"),Ea[t]=n+e.toString(16)}),'"')
	}functionGa(){
		returnMath.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)
	}functionKa(){
		this.Wa=-1
	}functionLa(){
		this.Wa=-1,
		this.Wa=64,
		this.P=[],
		this.ne=[],
		this.Uf=[],
		this.Ld=[],
		this.Ld[0]=128;for(vart=1;t<this.Wa;++t)this.Ld[t]=0;this.ee=this.ac=0,
		this.reset()
	}functionMa(t,
	e,
	n){
		n||(n=0);vari=t.Uf;if(p(e))for(varr=0;16>r;r++)i[r]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),
		n+=4;elsefor(r=0;16>r;r++)i[r]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],
		n+=4;for(r=16;80>r;r++){
			varo=i[r-3]^i[r-8]^i[r-14]^i[r-16];i[r]=4294967295&(o<<1|o>>>31)
		}e=t.P[0],
		n=t.P[1];for(vara,
		s=t.P[2],
		c=t.P[3],
		u=t.P[4],
		r=0;80>r;r++)40>r?20>r?(o=c^n&(s^c),
		a=1518500249): (o=n^s^c,
		a=1859775393): 60>r?(o=n&s|c&(n|s),
		a=2400959708): (o=n^s^c,
		a=3395469782),
		o=(e<<5|e>>>27)+o+u+a+i[r]&4294967295,
		u=c,
		c=s,
		s=4294967295&(n<<30|n>>>2),
		n=e,
		e=o;t.P[0]=t.P[0]+e&4294967295,
		t.P[1]=t.P[1]+n&4294967295,
		t.P[2]=t.P[2]+s&4294967295,
		t.P[3]=t.P[3]+c&4294967295,
		t.P[4]=t.P[4]+u&4294967295
	}functionTa(t,
	e){
		varn=Ua(t,
		e,
		void0);return0>n?null: p(t)?t.charAt(n): t[n]
	}functionUa(t,
	e,
	n){
		for(vari=t.length,
		r=p(t)?t.split(""): t,
		o=0;i>o;o++)if(oinr&&e.call(n,
		r[o],
		o,
		t))returno;return-1
	}functionVa(t,
	e){
		varn=Na(t,
		e);n>=0&&u.splice.call(t,
		n,
		1)
	}functionWa(t,
	e,
	n){
		return2>=arguments.length?u.slice.call(t,
		e): u.slice.call(t,
		e,
		n)
	}functionXa(t,
	e){
		t.sort(e||Ya)
	}functionYa(t,
	e){
		returnt>e?1: e>t?-1: 0
	}functionfb(t,
	e){
		if(!fa(t))throwError("encodeByteArray takes an array as a parameter");gb();for(varn=e?db: cb,
		i=[],
		r=0;r<t.length;r+=3){
			varo=t[r],
			a=r+1<t.length,
			s=a?t[r+1]: 0,
			c=r+2<t.length,
			u=c?t[r+2]: 0,
			h=o>>2,
			o=(3&o)<<4|s>>4,
			s=(15&s)<<2|u>>6,
			u=63&u;c||(u=64,
			a||(s=64)),
			i.push(n[h],
			n[o],
			n[s],
			n[u])
		}returni.join("")
	}functiongb(){
		if(!cb){
			cb={
				
			},
			db={
				
			},
			eb={
				
			};for(vart=0;65>t;t++)cb[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),
			db[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t),
			eb[db[t]]=t,
			t>=62&&(eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t)]=t)
		}
	}functionv(t,
	e){
		returnObject.prototype.hasOwnProperty.call(t,
		e)
	}functionw(t,
	e){
		returnObject.prototype.hasOwnProperty.call(t,
		e)?t[e]: void0
	}functionib(t,
	e){
		for(varnint)Object.prototype.hasOwnProperty.call(t,
		n)&&e(n,
		t[n])
	}functionjb(t){
		vare={
			
		};returnib(t,
		function(t,
		n){
			e[t]=n
		}),
		e
	}functionkb(t){
		vare=[];returnib(t,
		function(t,
		n){
			ea(n)?Oa(n,
			function(n){
				e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))
			}): e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))
		}),
		e.length?"&"+e.join("&"): ""
	}functionlb(t){
		vare={
			
		};returnt=t.replace(/^\?/,
		"").split("&"),
		Oa(t,
		function(t){
			t&&(t=t.split("="),
			e[t[0]]=t[1])
		}),
		e
	}functionx(t,
	e,
	n,
	i){
		varr;if(e>i?r="at least "+e: i>n&&(r=0===n?"none": "no more than "+n),
		r)throwError(t+" failed: Was called with "+i+(1===i?" argument.": " arguments.")+" Expects "+r+".")
	}functionz(t,
	e,
	n){
		vari="";switch(e){
			case1: i=n?"first": "First";break;case2: i=n?"second": "Second";break;case3: i=n?"third": "Third";break;case4: i=n?"fourth": "Fourth";break;default: throwError("errorPrefix called with argumentNumber > 4.  Need to update it?")
		}returnt=t+" failed: "+(i+" argument ")
	}functionA(t,
	e,
	i,
	r){
		if((!r||n(i))&&!ha(i))throwError(z(t,
		e,
		r)+"must be a valid function.")
	}functionmb(t,
	e,
	i){
		if(n(i)&&(!ia(i)||null===i))throwError(z(t,
		e,
		!0)+"must be a valid context object.")
	}functionnb(t){
		return"undefined"!=typeofJSON&&n(JSON.parse)?JSON.parse(t): Aa(t)
	}functionB(t){
		if("undefined"!=typeofJSON&&n(JSON.stringify))t=JSON.stringify(t);else{
			vare=[];Ca(newBa,
			t,
			e),
			t=e.join("")
		}returnt
	}functionob(){
		this.Wd=C
	}functionpb(){
		
	}functionrb(t,
	e,
	n){
		this.Rf=t,
		this.Ka=e,
		this.Kd=n
	}functionvb(){
		this.ub=[]
	}functionwb(t,
	e){
		for(varn=null,
		i=0;i<e.length;i++){
			varr=e[i],
			o=r.Zb();null===n||o.ca(n.Zb())||(t.ub.push(n),
			n=null),
			null===n&&(n=newxb(o)),
			n.add(r)
		}n&&t.ub.push(n)
	}functionyb(t,
	e,
	n){
		wb(t,
		n),
		zb(t,
		function(t){
			returnt.ca(e)
		})
	}functionAb(t,
	e,
	n){
		wb(t,
		n),
		zb(t,
		function(t){
			returnt.contains(e)||e.contains(t)
		})
	}functionzb(t,
	e){
		for(varn=!0,
		i=0;i<t.ub.length;i++){
			varr=t.ub[i];if(r)if(r=r.Zb(),
			e(r)){
				for(varr=t.ub[i],
				o=0;o<r.vd.length;o++){
					vara=r.vd[o];if(null!==a){
						r.vd[o]=null;vars=a.Vb();Bb&&Cb("event: "+a.toString()),
						Db(s)
					}
				}t.ub[i]=null
			}elsen=!1
		}n&&(t.ub=[])
	}functionxb(t){
		this.ra=t,
		this.vd=[]
	}functionD(t,
	e,
	n,
	i){
		this.type=t,
		this.Ja=e,
		this.Xa=n,
		this.Le=i,
		this.Qd=void0
	}functionEb(t){
		returnnewD(Fb,
		t)
	}functionGb(t,
	e,
	n,
	i){
		this.ve=e,
		this.$d=n,
		this.Qd=i,
		this.ud=t
	}functionHb(t,
	e,
	n){
		this.ve=t,
		this.error=e,
		this.path=n
	}functiontb(t,
	e,
	n){
		this.w=t,
		this.ea=e,
		this.Ub=n
	}functionIb(t){
		returnt.ea
	}functionJb(t,
	e){
		returne.e()?t.ea&&!t.Ub: sb(t,
		E(e))
	}functionsb(t,
	e){
		returnt.ea&&!t.Ub||t.w.Da(e)
	}functionKb(t){
		this.eg=t,
		this.Dd=null
	}functionLb(t,
	e){
		this.Nf={
			
		},
		this.fd=newKb(t),
		this.ba=e;varn=1e4+2e4*Math.random();setTimeout(q(this.If,
		this),
		Math.floor(n))
	}functionMb(){
		this.Ec={
			
		}
	}functionNb(t,
	e,
	i){
		n(i)||(i=1),
		v(t.Ec,
		e)||(t.Ec[e]=0),
		t.Ec[e]+=i
	}functionQb(t){
		returnt=t.toString(),
		Ob[t]||(Ob[t]=newMb),
		Ob[t]
	}functionRb(t,
	e){
		varn=t.toString();returnPb[n]||(Pb[n]=e()),
		Pb[n]
	}functionF(t,
	e){
		this.name=t,
		this.S=e
	}functionSb(t,
	e){
		returnnewF(t,
		e)
	}functionTb(t,
	e){
		returnUb(t.name,
		e.name)
	}functionVb(t,
	e){
		returnUb(t,
		e)
	}functionWb(t,
	e,
	n){
		this.type=Xb,
		this.source=t,
		this.path=e,
		this.Ga=n
	}functionYb(t,
	e){
		this.type=Zb,
		this.source=t,
		this.path=e
	}function$b(t,
	e){
		this.La=t,
		this.wa=e?e: ac
	}functionbc(t,
	e){
		for(varn,
		i=t.wa,
		r=null;!i.e();){
			if(n=t.La(e,
			i.key),
			0===n){
				if(i.left.e())returnr?r.key: null;for(i=i.left;!i.right.e();)i=i.right;returni.key
			}0>n?i=i.left: n>0&&(r=i,
			i=i.right)
		}throwError("Attempted to find predecessor key for a nonexistent key.  What gives?")
	}functioncc(t,
	e,
	n,
	i,
	r){
		for(this.Ud=r||null,
		this.Ge=i,
		this.Qa=[],
		r=1;!t.e();)if(r=e?n(t.key,
		e): 1,
		i&&(r*=-1),
		0>r)t=this.Ge?t.left: t.right;else{
			if(0===r){
				this.Qa.push(t);break
			}this.Qa.push(t),
			t=this.Ge?t.right: t.left
		}
	}functionJ(t){
		if(0===t.Qa.length)returnnull;vare,
		n=t.Qa.pop();if(e=t.Ud?t.Ud(n.key,
		n.value): {
			key: n.key,
			value: n.value
		},
		t.Ge)for(n=n.left;!n.e();)t.Qa.push(n),
		n=n.right;elsefor(n=n.right;!n.e();)t.Qa.push(n),
		n=n.left;returne
	}functiondc(t){
		if(0===t.Qa.length)returnnull;vare;returne=t.Qa,
		e=e[e.length-1],
		t.Ud?t.Ud(e.key,
		e.value): {
			key: e.key,
			value: e.value
		}
	}functionec(t,
	e,
	n,
	i,
	r){
		this.key=t,
		this.value=e,
		this.color=null!=n?n: !0,
		this.left=null!=i?i: ac,
		this.right=null!=r?r: ac
	}functionfc(t){
		returnt.left.e()?t: fc(t.left)
	}functionhc(t){
		returnt.left.e()?ac: (t.left.fa()||t.left.left.fa()||(t=ic(t)),
		t=t.X(null,
		null,
		null,
		hc(t.left),
		null),
		gc(t))
	}functiongc(t){
		returnt.right.fa()&&!t.left.fa()&&(t=lc(t)),
		t.left.fa()&&t.left.left.fa()&&(t=jc(t)),
		t.left.fa()&&t.right.fa()&&(t=kc(t)),
		t
	}functionic(t){
		returnt=kc(t),
		t.right.left.fa()&&(t=t.X(null,
		null,
		null,
		null,
		jc(t.right)),
		t=lc(t),
		t=kc(t)),
		t
	}functionlc(t){
		returnt.right.X(null,
		null,
		t.color,
		t.X(null,
		null,
		!0,
		null,
		t.right.left),
		null)
	}functionjc(t){
		returnt.left.X(null,
		null,
		t.color,
		null,
		t.X(null,
		null,
		!0,
		t.left.right,
		null))
	}functionkc(t){
		returnt.X(null,
		null,
		!t.color,
		t.left.X(null,
		null,
		!t.left.color,
		null,
		null),
		t.right.X(null,
		null,
		!t.right.color,
		null,
		null))
	}functionmc(){
		
	}functionnc(t,
	e){
		returnt&&"object"==typeoft?(K(".sv"int,
		"Unexpected leaf node or priority contents"),
		e[t[".sv"]]): t
	}functionoc(t,
	e){
		varn=newpc;returnqc(t,
		newL(""),
		function(t,
		i){
			n.nc(t,
			rc(i,
			e))
		}),
		n
	}functionrc(t,
	e){
		varn,
		i=t.B().H(),
		i=nc(i,
		e);if(t.L()){
			varr=nc(t.Ca(),
			e);returnr!==t.Ca()||i!==t.B().H()?newsc(r,
			M(i)): t
		}returnn=t,
		i!==t.B().H()&&(n=n.ga(newsc(i))),
		t.R(N,
		function(t,
		i){
			varr=rc(i,
			e);r!==i&&(n=n.O(t,
			r))
		}),
		n
	}functionL(t,
	e){
		if(1==arguments.length){
			this.n=t.split("/");for(varn=0,
			i=0;i<this.n.length;i++)0<this.n[i].length&&(this.n[n]=this.n[i],
			n++);this.n.length=n,
			this.Z=0
		}elsethis.n=t,
		this.Z=e
	}functionO(t,
	e){
		varn=E(t);if(null===n)returne;if(n===E(e))returnO(H(t),
		H(e));throwError("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")
	}functionE(t){
		returnt.Z>=t.n.length?null: t.n[t.Z]
	}functiontc(t){
		returnt.n.length-t.Z
	}functionH(t){
		vare=t.Z;returne<t.n.length&&e++,
		newL(t.n,
		e)
	}functionuc(t){
		returnt.Z<t.n.length?t.n[t.n.length-1]: null
	}functionvc(t,
	e){
		this.Ra=t.slice(),
		this.Ha=Math.max(1,
		this.Ra.length),
		this.lf=e;for(varn=0;n<this.Ra.length;n++)this.Ha+=wc(this.Ra[n]);xc(this)
	}functionxc(t){
		if(768<t.Ha)throwError(t.lf+"has a key path longer than 768 bytes ("+t.Ha+").");if(32<t.Ra.length)throwError(t.lf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+yc(t))
	}functionyc(t){
		return0==t.Ra.length?"": "in property '"+t.Ra.join(".")+"'"
	}functionzc(){
		this.wc={
			
		}
	}functionAc(t){
		this.Fc=t,
		this.Pd="firebase:"
	}functionBc(t){
		try{
			if("undefined"!=typeofwindow&&"undefined"!=typeofwindow[t]){
				vare=window[t];returne.setItem("firebase:sentinel",
				"cache"),
				e.removeItem("firebase:sentinel"),
				newAc(e)
			}
		}catch(n){
			
		}returnnewzc
	}functionDc(t,
	e,
	n,
	i,
	r){
		this.host=t.toLowerCase(),
		this.domain=this.host.substr(this.host.indexOf(".")+1),
		this.lb=e,
		this.Db=n,
		this.Ug=i,
		this.Od=r||"",
		this.Pa=Cc.get("host:"+t)||this.host
	}functionEc(t,
	e){
		e!==t.Pa&&(t.Pa=e,
		"s-"===t.Pa.substr(0,
		2)&&Cc.set("host:"+t.host,
		t.Pa))
	}functionK(t,
	e){
		if(!t)throwGc(e)
	}functionGc(t){
		returnError("Firebase ("+hb+") INTERNAL ASSERT FAILED: "+t)
	}functionHc(t){
		try{
			vare;if("undefined"!=typeofatob)e=atob(t);else{
				gb();for(varn=eb,
				i=[],
				r=0;r<t.length;){
					varo=n[t.charAt(r++)],
					a=r<t.length?n[t.charAt(r)]: 0;++r;vars=r<t.length?n[t.charAt(r)]: 64;++r;varc=r<t.length?n[t.charAt(r)]: 64;if(++r,
					null==o||null==a||null==s||null==c)throwError();i.push(o<<2|a>>4),
					64!=s&&(i.push(a<<4&240|s>>2),
					64!=c&&i.push(s<<6&192|c))
				}if(8192>i.length)e=String.fromCharCode.apply(null,
				i);else{
					for(t="",
					n=0;n<i.length;n+=8192)t+=String.fromCharCode.apply(null,
					Wa(i,
					n,
					n+8192));e=t
				}
			}returne
		}catch(u){
			Cb("base64Decode failed: ",
			u)
		}returnnull
	}functionIc(t){
		vare=Jc(t);t=newLa,
		t.update(e);vare=[],
		n=8*t.ee;56>t.ac?t.update(t.Ld,
		56-t.ac): t.update(t.Ld,
		t.Wa-(t.ac-56));for(vari=t.Wa-1;i>=56;i--)t.ne[i]=255&n,
		n/=256;for(Ma(t,
		t.ne),
		i=n=0;5>i;i++)for(varr=24;r>=0;r-=8)e[n]=t.P[i]>>r&255,
		++n;returnfb(e)
	}functionKc(t){
		for(vare="",
		n=0;n<arguments.length;n++)e=fa(arguments[n])?e+Kc.apply(null,
		arguments[n]): "object"==typeofarguments[n]?e+B(arguments[n]): e+arguments[n],
		e+=" ";returne
	}functionCb(t){
		if(!0===Lc&&(Lc=!1,
		null===Bb&&!0===P.get("logging_enabled")&&Mc(!0)),
		Bb){
			vare=Kc.apply(null,
			arguments);Bb(e)
		}
	}functionNc(t){
		returnfunction(){
			Cb(t,
			arguments)
		}
	}functionOc(t){
		if("undefined"!=typeofconsole){
			vare="FIREBASE INTERNAL ERROR: "+Kc.apply(null,
			arguments);"undefined"!=typeofconsole.error?console.error(e): console.log(e)
		}
	}functionPc(t){
		vare=Kc.apply(null,
		arguments);throwError("FIREBASE FATAL ERROR: "+e)
	}functionQ(t){
		if("undefined"!=typeofconsole){
			vare="FIREBASE WARNING: "+Kc.apply(null,
			arguments);"undefined"!=typeofconsole.warn?console.warn(e): console.log(e)
		}
	}functionQc(t){
		vare="",
		n="",
		i="",
		r="",
		o=!0,
		a="https",
		s=443;if(p(t)){
			varc=t.indexOf("//");for(c>=0&&(a=t.substring(0,
			c-1),
			t=t.substring(c+2)),
			c=t.indexOf("/"),
			-1===c&&(c=t.length),
			e=t.substring(0,
			c),
			r="",
			t=t.substring(c).split("/"),
			c=0;c<t.length;c++)if(0<t[c].length){
				varu=t[c];try{
					u=decodeURIComponent(u.replace(/\+/g,
					" "))
				}catch(h){
					
				}r+="/"+u
			}t=e.split("."),
			3===t.length?(n=t[1],
			i=t[0].toLowerCase()): 2===t.length&&(n=t[0]),
			c=e.indexOf(":"),
			c>=0&&(o="https"===a||"wss"===a,
			s=e.substring(c+1),
			isFinite(s)&&(s=String(s)),
			s=p(s)?/^\s*-?0x/i.test(s)?parseInt(s,
			16): parseInt(s,
			10): NaN)
		}return{
			host: e,
			port: s,
			domain: n,
			Rg: i,
			lb: o,
			scheme: a,
			$c: r
		}
	}functionRc(t){
		returnga(t)&&(t!=t||t==Number.POSITIVE_INFINITY||t==Number.NEGATIVE_INFINITY)
	}functionSc(t){
		if("complete"===document.readyState)t();else{
			vare=!1,
			n=function(){
				document.body?e||(e=!0,
				t()): setTimeout(n,
				Math.floor(10))
			};document.addEventListener?(document.addEventListener("DOMContentLoaded",
			n,
			!1),
			window.addEventListener("load",
			n,
			!1)): document.attachEvent&&(document.attachEvent("onreadystatechange",
			function(){
				"complete"===document.readyState&&n()
			}),
			window.attachEvent("onload",
			n))
		}
	}functionUb(t,
	e){
		if(t===e)return0;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return1;varn=Tc(t),
		i=Tc(e);returnnull!==n?null!==i?0==n-i?t.length-e.length: n-i: -1: null!==i?1: e>t?-1: 1
	}functionUc(t,
	e){
		if(e&&tine)returne[t];throwError("Missing required key ("+t+") in object: "+B(e))
	}functionVc(t){
		if("object"!=typeoft||null===t)returnB(t);vare,
		n=[];for(eint)n.push(e);n.sort(),
		e="{";for(vari=0;i<n.length;i++)0!==i&&(e+=","),
		e+=B(n[i]),
		e+=":",
		e+=Vc(t[n[i]]);returne+"}"
	}functionWc(t,
	e){
		if(t.length<=e)return[t];for(varn=[],
		i=0;i<t.length;i+=e)i+e>t?n.push(t.substring(i,
		t.length)): n.push(t.substring(i,
		i+e));returnn
	}functionXc(t,
	e){
		if(ea(t))for(varn=0;n<t.length;++n)e(n,
		t[n]);elser(t,
		e)
	}functionYc(t){
		K(!Rc(t),
		"Invalid JSON number");vare,
		n,
		i,
		r;for(0===t?(i=n=0,
		e=-(1/0)===1/t?1: 0): (e=0>t,
		t=Math.abs(t),
		t>=Math.pow(2,
		-1022)?(i=Math.min(Math.floor(Math.log(t)/Math.LN2),
		1023),
		n=i+1023,
		i=Math.round(t*Math.pow(2,
		52-i)-Math.pow(2,
		52))): (n=0,
		i=Math.round(t/Math.pow(2,
		-1074)))),
		r=[],
		t=52;t;--t)r.push(i%2?1: 0),
		i=Math.floor(i/2);for(t=11;t;--t)r.push(n%2?1: 0),
		n=Math.floor(n/2);for(r.push(e?1: 0),
		r.reverse(),
		e=r.join(""),
		n="",
		t=0;64>t;t+=8)i=parseInt(e.substr(t,
		8),
		2).toString(16),
		1===i.length&&(i="0"+i),
		n+=i;returnn.toLowerCase()
	}functionTc(t){
		returnZc.test(t)&&(t=Number(t),
		t>=-2147483648&&2147483647>=t)?t: null
	}functionDb(t){
		try{
			t()
		}catch(e){
			setTimeout(function(){
				throwQ("Exception was thrown by user callback.",
				e.stack||""),
				e
			},
			Math.floor(0))
		}
	}functionR(t,
	e){
		if(ha(t)){
			varn=Array.prototype.slice.call(arguments,
			1).slice();Db(function(){
				t.apply(null,
				n)
			})
		}
	}functionJc(t){
		for(vare=[],
		n=0,
		i=0;i<t.length;i++){
			varr=t.charCodeAt(i);r>=55296&&56319>=r&&(r-=55296,
			i++,
			K(i<t.length,
			"Surrogate pair missing trail surrogate."),
			r=65536+(r<<10)+(t.charCodeAt(i)-56320)),
			128>r?e[n++]=r: (2048>r?e[n++]=r>>6|192: (65536>r?e[n++]=r>>12|224: (e[n++]=r>>18|240,
			e[n++]=r>>12&63|128),
			e[n++]=r>>6&63|128),
			e[n++]=63&r|128)
		}returne
	}functionwc(t){
		for(vare=0,
		n=0;n<t.length;n++){
			vari=t.charCodeAt(n);128>i?e++: 2048>i?e+=2: i>=55296&&56319>=i?(e+=4,
			n++): e+=3
		}returne
	}function$c(t){
		vare={
			
		},
		n={
			
		},
		i={
			
		},
		r="";try{
			varo=t.split("."),
			e=nb(Hc(o[0])||""),
			n=nb(Hc(o[1])||""),
			r=o[2],
			i=n.d||{
				
			};deleten.d
		}catch(a){
			
		}return{
			Xg: e,
			Bc: n,
			data: i,
			Og: r
		}
	}functionad(t){
		returnt=$c(t).Bc,
		"object"==typeoft&&t.hasOwnProperty("iat")?w(t,
		"iat"): null
	}functionbd(t){
		t=$c(t);vare=t.Bc;return!!t.Og&&!!e&&"object"==typeofe&&e.hasOwnProperty("iat")
	}functioncd(t){
		this.V=t,
		this.g=t.o.g
	}functiondd(t,
	e,
	n,
	i){
		varr=[],
		o=[];returnOa(e,
		function(e){
			"child_changed"===e.type&&t.g.Ad(e.Le,
			e.Ja)&&o.push(newD("child_moved",
			e.Ja,
			e.Xa))
		}),
		ed(t,
		r,
		"child_removed",
		e,
		i,
		n),
		ed(t,
		r,
		"child_added",
		e,
		i,
		n),
		ed(t,
		r,
		"child_moved",
		o,
		i,
		n),
		ed(t,
		r,
		"child_changed",
		e,
		i,
		n),
		ed(t,
		r,
		Fb,
		e,
		i,
		n),
		r
	}functioned(t,
	e,
	n,
	i,
	r,
	o){
		i=Pa(i,
		function(t){
			returnt.type===n
		}),
		Xa(i,
		q(t.fg,
		t)),
		Oa(i,
		function(n){
			vari=fd(t,
			n,
			o);Oa(r,
			function(r){
				r.Kf(n.type)&&e.push(r.createEvent(i,
				t.V))
			})
		})
	}functionfd(t,
	e,
	n){
		return"value"!==e.type&&"child_removed"!==e.type&&(e.Qd=n.rf(e.Xa,
		e.Ja,
		t.g)),
		e
	}functiongd(){
		this.bb={
			
		}
	}functionhd(t,
	e){
		varn=e.type,
		i=e.Xa;K("child_added"==n||"child_changed"==n||"child_removed"==n,
		"Only child changes supported for tracking"),
		K(".priority"!==i,
		"Only non-priority child changes can be tracked.");varr=w(t.bb,
		i);if(r){
			varo=r.type;if("child_added"==n&&"child_removed"==o)t.bb[i]=newD("child_changed",
			e.Ja,
			i,
			r.Ja);elseif("child_removed"==n&&"child_added"==o)deletet.bb[i];elseif("child_removed"==n&&"child_changed"==o)t.bb[i]=newD("child_removed",
			r.Le,
			i);elseif("child_changed"==n&&"child_added"==o)t.bb[i]=newD("child_added",
			e.Ja,
			i);else{
				if("child_changed"!=n||"child_changed"!=o)throwGc("Illegal combination of changes: "+e+" occurred after "+r);t.bb[i]=newD("child_changed",
				e.Ja,
				i,
				r.Le)
			}
		}elset.bb[i]=e
	}functionid(t,
	e,
	n){
		this.Rb=t,
		this.qb=e,
		this.sb=n||null
	}functionjd(t,
	e,
	n){
		this.ha=t,
		this.qb=e,
		this.sb=n
	}functionkd(t){
		this.g=t
	}functionld(t){
		this.Ce=newkd(t.g),
		this.g=t.g;vare;t.ma?(e=md(t),
		e=t.g.Pc(nd(t),
		e)): e=t.g.Tc(),
		this.ed=e,
		t.pa?(e=od(t),
		t=t.g.Pc(pd(t),
		e)): t=t.g.Qc(),
		this.Gc=t
	}functionqd(t){
		this.sa=newld(t),
		this.g=t.g,
		K(t.ja,
		"Only valid if limit has been set"),
		this.ka=t.ka,
		this.Jb=!rd(t)
	}functionsd(t,
	e,
	n,
	i,
	r,
	o){
		vara;if(t.Jb){
			vars=td(t.g);a=function(t,
			e){
				returns(e,
				t)
			}
		}elsea=td(t.g);K(e.Eb()==t.ka,
		"");varc=newF(n,
		i),
		u=t.Jb?ud(e,
		t.g): vd(e,
		t.g),
		h=t.sa.matches(c);if(e.Da(n)){
			for(varl=e.J(n),
			u=r.ze(t.g,
			u,
			t.Jb);null!=u&&(u.name==n||e.Da(u.name));)u=r.ze(t.g,
			u,
			t.Jb);returnr=null==u?1: a(u,
			c),
			h&&!i.e()&&r>=0?(null!=o&&hd(o,
			newD("child_changed",
			i,
			n,
			l)),
			e.O(n,
			i)): (null!=o&&hd(o,
			newD("child_removed",
			l,
			n)),
			e=e.O(n,
			C),
			null!=u&&t.sa.matches(u)?(null!=o&&hd(o,
			newD("child_added",
			u.S,
			u.name)),
			e.O(u.name,
			u.S)): e)
		}returni.e()?e: h&&0<=a(u,
		c)?(null!=o&&(hd(o,
		newD("child_removed",
		u.S,
		u.name)),
		hd(o,
		newD("child_added",
		i,
		n))),
		e.O(n,
		i).O(u.name,
		C)): e
	}functionwd(t,
	e){
		this.ke=t,
		this.dg=e
	}functionyd(t){
		this.U=t
	}functionHd(t,
	e,
	n,
	i,
	r,
	o){
		vara=e.Q;if(null!=i.tc(n))returne;vars;if(n.e())K(Ib(e.C()),
		"If change path is empty, we must have complete server data"),
		e.C().Ub?(r=ub(e),
		i=i.yc(rinstanceofT?r: C)): i=i.za(ub(e)),
		o=t.U.xa(e.Q.j(),
		i,
		o);else{
			varc=E(n);if(".priority"==c)K(1==tc(n),
			"Can't have a priority with additional path components"),
			o=a.j(),
			s=e.C().j(),
			i=i.ld(n,
			o,
			s),
			o=null!=i?t.U.ga(o,
			i): a.j();else{
				varu=H(n);sb(a,
				c)?(s=e.C().j(),
				i=i.ld(n,
				a.j(),
				s),
				i=null!=i?a.j().J(c).K(u,
				i): a.j().J(c)): i=i.xc(c,
				e.C()),
				o=null!=i?t.U.K(a.j(),
				c,
				i,
				u,
				r,
				o): a.j()
			}
		}returnFd(e,
		o,
		a.ea||n.e(),
		t.U.Na())
	}functionAd(t,
	e,
	n,
	i,
	r,
	o,
	a,
	s){
		varc=e.C();if(a=a?t.U: t.U.Wb(),
		n.e())i=a.xa(c.j(),
		i,
		null);elseif(a.Na()&&!c.Ub)i=c.j().K(n,
		i),
		i=a.xa(c.j(),
		i,
		null);else{
			varu=E(n);if(!Jb(c,
			n)&&1<tc(n))returne;varh=H(n);i=c.j().J(u).K(h,
			i),
			i=".priority"==u?a.ga(c.j(),
			i): a.K(c.j(),
			u,
			i,
			h,
			qb,
			null)
		}returnc=c.ea||n.e(),
		e=newId(e.Q,
		newtb(i,
		c,
		a.Na())),
		Hd(t,
		e,
		n,
		r,
		newrb(r,
		e,
		o),
		s)
	}functionzd(t,
	e,
	n,
	i,
	r,
	o,
	a){
		vars=e.Q;if(r=newrb(r,
		e,
		o),
		n.e())a=t.U.xa(e.Q.j(),
		i,
		a),
		t=Fd(e,
		a,
		!0,
		t.U.Na());elseif(o=E(n),
		".priority"===o)a=t.U.ga(e.Q.j(),
		i),
		t=Fd(e,
		a,
		s.ea,
		s.Ub);else{
			n=H(n);varc=s.j().J(o);if(!n.e()){
				varu=r.qf(o);i=null!=u?".priority"===uc(n)&&u.Y(n.parent()).e()?u: u.K(n,
				i): C
			}c.ca(i)?t=e: (a=t.U.K(s.j(),
			o,
			i,
			n,
			r,
			a),
			t=Fd(e,
			a,
			s.ea,
			t.U.Na()))
		}returnt
	}functionCd(t,
	e,
	n,
	i,
	r,
	o,
	a){
		vars=e;returnKd(i,
		function(i,
		c){
			varu=n.u(i);sb(e.Q,
			E(u))&&(s=zd(t,
			s,
			u,
			c,
			r,
			o,
			a))
		}),
		Kd(i,
		function(i,
		c){
			varu=n.u(i);sb(e.Q,
			E(u))||(s=zd(t,
			s,
			u,
			c,
			r,
			o,
			a))
		}),
		s
	}functionLd(t,
	e){
		returnKd(e,
		function(e,
		n){
			t=t.K(e,
			n)
		}),
		t
	}functionDd(t,
	e,
	n,
	i,
	r,
	o,
	a,
	s){
		if(e.C().j().e()&&!Ib(e.C()))returne;varc=e;n=n.e()?i: Md(Nd,
		n,
		i);varu=e.C().j();returnn.children.ia(function(n,
		i){
			if(u.Da(n)){
				varh=e.C().j().J(n),
				h=Ld(h,
				i);c=Ad(t,
				c,
				newL(n),
				h,
				r,
				o,
				a,
				s)
			}
		}),
		n.children.ia(function(n,
		i){
			varh=!sb(e.C(),
			n)&&null==i.value;u.Da(n)||h||(h=e.C().j().J(n),
			h=Ld(h,
			i),
			c=Ad(t,
			c,
			newL(n),
			h,
			r,
			o,
			a,
			s))
		}),
		c
	}functionGd(t,
	e,
	n,
	i,
	r,
	o,
	a){
		if(null!=r.tc(n))returne;vars=e.C();if(null!=i.value){
			if(n.e()&&s.ea||Jb(s,
			n))returnAd(t,
			e,
			n,
			s.j().Y(n),
			r,
			o,
			!1,
			a);if(n.e()){
				varc=Nd;returns.j().R(Od,
				function(t,
				e){
					c=c.set(newL(t),
					e)
				}),
				Dd(t,
				e,
				n,
				c,
				r,
				o,
				!1,
				a)
			}returne
		}returnc=Nd,
		Kd(i,
		function(t){
			vare=n.u(t);Jb(s,
			e)&&(c=c.set(t,
			s.j().Y(e)))
		}),
		Dd(t,
		e,
		n,
		c,
		r,
		o,
		!1,
		a)
	}functionPd(){
		
	}functiontd(t){
		returnq(t.compare,
		t)
	}functionSd(t){
		this.cc=t
	}functionUd(){
		
	}functionVd(){
		
	}functionWd(){
		
	}functionZd(){
		this.Tb=this.pa=this.Lb=this.ma=this.ja=!1,
		this.ka=0,
		this.Nb="",
		this.ec=null,
		this.yb="",
		this.bc=null,
		this.wb="",
		this.g=N
	}functionrd(t){
		return""===t.Nb?t.ma: "l"===t.Nb
	}functionnd(t){
		returnK(t.ma,
		"Only valid if start has been set"),
		t.ec
	}functionmd(t){
		returnK(t.ma,
		"Only valid if start has been set"),
		t.Lb?t.yb: "[MIN_NAME]"
	}functionpd(t){
		returnK(t.pa,
		"Only valid if end has been set"),
		t.bc
	}functionod(t){
		returnK(t.pa,
		"Only valid if end has been set"),
		t.Tb?t.wb: "[MAX_NAME]"
	}functionae(t){
		vare=newZd;returne.ja=t.ja,
		e.ka=t.ka,
		e.ma=t.ma,
		e.ec=t.ec,
		e.Lb=t.Lb,
		e.yb=t.yb,
		e.pa=t.pa,
		e.bc=t.bc,
		e.Tb=t.Tb,
		e.wb=t.wb,
		e.g=t.g,
		e
	}functionbe(t,
	e){
		varn=ae(t);returnn.g=e,
		n
	}functionce(t){
		vare={
			
		};if(t.ma&&(e.sp=t.ec,
		t.Lb&&(e.sn=t.yb)),
		t.pa&&(e.ep=t.bc,
		t.Tb&&(e.en=t.wb)),
		t.ja){
			e.l=t.ka;varn=t.Nb;""===n&&(n=rd(t)?"l": "r"),
			e.vf=n
		}returnt.g!==N&&(e.i=t.g.toString()),
		e
	}functionde(t){
		return!(t.ma||t.pa||t.ja)
	}functionee(t){
		vare={
			
		};if(de(t)&&t.g==N)returne;varn;returnt.g===N?n="$priority": t.g===Yd?n="$value": t.g===Od?n="$key": (K(t.ginstanceofSd,
		"Unrecognized index type!"),
		n=t.g.toString()),
		e.orderBy=B(n),
		t.ma&&(e.startAt=B(t.ec),
		t.Lb&&(e.startAt+=","+B(t.yb))),
		t.pa&&(e.endAt=B(t.bc),
		t.Tb&&(e.endAt+=","+B(t.wb))),
		t.ja&&(rd(t)?e.limitToFirst=t.ka: e.limitToLast=t.ka),
		e
	}functionfe(t,
	e){
		this.Bd=t,
		this.dc=e
	}functionge(t,
	e,
	n){
		vari=na(t.Bd,
		function(i,
		r){
			varo=w(t.dc,
			r);if(K(o,
			"Missing index implementation for "+r),
			i===Qd){
				if(o.Ic(e.S)){
					for(vara=[],
					s=n.Xb(Sb),
					c=J(s);c;)c.name!=e.name&&a.push(c),
					c=J(s);returna.push(e),
					he(a,
					td(o))
				}returnQd
			}returno=n.get(e.name),
			a=i,
			o&&(a=a.remove(newF(e.name,
			o))),
			a.Oa(e,
			e.S)
		});returnnewfe(i,
		t.dc)
	}functionie(t,
	e,
	n){
		vari=na(t.Bd,
		function(t){
			if(t===Qd)returnt;vari=n.get(e.name);returni?t.remove(newF(e.name,
			i)): t
		});returnnewfe(i,
		t.dc)
	}functionsc(t,
	e){
		this.A=t,
		K(n(this.A)&&null!==this.A,
		"LeafNode shouldn't be created with null/undefined value."),
		this.aa=e||C,
		ke(this.aa),
		this.Cb=null
	}functionT(t,
	e,
	n){
		this.m=t,
		(this.aa=e)&&ke(this.aa),
		t.e()&&K(!this.aa||this.aa.e(),
		"An empty node cannot have a priority"),
		this.xb=n,
		this.Cb=null
	}functionud(t,
	e){
		varn;returnn=(n=oe(t,
		e))?(n=n.Sc())&&n.name: t.m.Sc(),
		n?newF(n,
		t.m.get(n)): null
	}functionvd(t,
	e){
		varn;returnn=(n=oe(t,
		e))?(n=n.fc())&&n.name: t.m.fc(),
		n?newF(n,
		t.m.get(n)): null
	}functionoe(t,
	e){
		returne===Od?null: t.xb.get(e.toString())
	}functionM(t,
	e){
		if(null===t)returnC;varn=null;if("object"==typeoft&&".priority"int?n=t[".priority"]: "undefined"!=typeofe&&(n=e),
		K(null===n||"string"==typeofn||"number"==typeofn||"object"==typeofn&&".sv"inn,
		"Invalid priority type found: "+typeofn),
		"object"==typeoft&&".value"int&&null!==t[".value"]&&(t=t[".value"]),
		"object"!=typeoft||".sv"int)returnnewsc(t,
		M(n));if(tinstanceofArray){
			vari=C,
			o=t;returnr(o,
			function(t,
			e){
				if(v(o,
				e)&&"."!==e.substring(0,
				1)){
					varn=M(t);(n.L()||!n.e())&&(i=i.O(e,
					n))
				}
			}),
			i.ga(M(n))
		}vara=[],
		s=!1,
		c=t;if(ib(c,
		function(t){
			if("string"!=typeoft||"."!==t.substring(0,
			1)){
				vare=M(c[t]);e.e()||(s=s||!e.B().e(),
				a.push(newF(t,
				e)))
			}
		}),
		0==a.length)returnC;varu=he(a,
		Tb,
		function(t){
			returnt.name
		},
		Vb);if(s){
			varh=he(a,
			td(N));returnnewT(u,
			M(n),
			newfe({
				".priority": h
			},
			{
				".priority": N
			}))
		}returnnewT(u,
		M(n),
		je)
	}functionqe(t){
		this.count=parseInt(Math.log(t+1)/pe,
		10),
		this.jf=this.count-1,
		this.cg=t+1&parseInt(Array(this.count+1).join("1"),
		2)
	}functionre(t){
		vare=!(t.cg&1<<t.jf);returnt.jf--,
		e
	}functionhe(t,
	e,
	n,
	i){
		functionr(e,
		i){
			varo=i-e;if(0==o)returnnull;if(1==o){
				vara=t[e],
				s=n?n(a): a;returnnewec(s,
				a.S,
				!1,
				null,
				null)
			}vara=parseInt(o/2,
			10)+e,
			o=r(e,
			a),
			c=r(a+1,
			i),
			a=t[a],
			s=n?n(a): a;returnnewec(s,
			a.S,
			!1,
			o,
			c)
		}t.sort(e);varo=function(e){
			functioni(e,
			i){
				varc=s-e,
				u=s;s-=e;varu=r(c+1,
				u),
				c=t[c],
				h=n?n(c): c,
				u=newec(h,
				c.S,
				i,
				null,
				u);o?o.left=u: a=u,
				o=u
			}for(varo=null,
			a=null,
			s=t.length,
			c=0;c<e.count;++c){
				varu=re(e),
				h=Math.pow(2,
				e.count-(c+1));u?i(h,
				!1): (i(h,
				!1),
				i(h,
				!0))
			}returna
		}(newqe(t.length));returnnull!==o?new$b(i||e,
		o): new$b(i||e)
	}functionme(t){
		return"number"==typeoft?"number:"+Yc(t): "string:"+t
	}functionke(t){
		if(t.L()){
			vare=t.H();K("string"==typeofe||"number"==typeofe||"object"==typeofe&&v(e,
			".sv"),
			"Priority must be a string or number.")
		}elseK(t===Td||t.e(),
		"priority of unexpected type.");K(t===Td||t.B().e(),
		"Priority nodes can't have a priority of their own.")
	}functionse(){
		T.call(this,
		new$b(Vb),
		C,
		je)
	}functionId(t,
	e){
		this.Q=t,
		this.Yd=e
	}functionFd(t,
	e,
	n,
	i){
		returnnewId(newtb(e,
		n,
		i),
		t.Yd)
	}functionJd(t){
		returnt.Q.ea?t.Q.j(): null
	}functionub(t){
		returnt.Yd.ea?t.Yd.j(): null
	}functionte(t,
	e){
		this.V=t;varn=t.o,
		i=newkd(n.g),
		n=de(n)?newkd(n.g): n.ja?newqd(n): newld(n);this.Hf=newyd(n);varr=e.C(),
		o=e.Q,
		a=i.xa(C,
		r.j(),
		null),
		s=n.xa(C,
		o.j(),
		null);this.Ka=newId(newtb(s,
		o.ea,
		n.Na()),
		newtb(a,
		r.ea,
		i.Na())),
		this.Ya=[],
		this.jg=newcd(t)
	}functionue(t){
		returnt.V
	}functionwe(t,
	e){
		varn=t.Ka.Q,
		i=[];returnn.j().L()||n.j().R(N,
		function(t,
		e){
			i.push(newD("child_added",
			e,
			t))
		}),
		n.ea&&i.push(Eb(n.j())),
		ve(t,
		i,
		n.j(),
		e)
	}functionve(t,
	e,
	n,
	i){
		returndd(t.jg,
		e,
		n,
		i?[i]: t.Ya)
	}functionxe(t,
	e,
	n){
		this.type=Bd,
		this.source=t,
		this.path=e,
		this.children=n
	}functionye(t,
	e){
		this.f=Nc("p:rest:"),
		this.F=t,
		this.Hb=e,
		this.Aa=null,
		this.$={
			
		}
	}functionze(t,
	e){
		if(n(e))return"tag$"+e;vari=t.o;returnK(de(i)&&i.g==N,
		"should have a tag if it's not a default query."),
		t.path.toString()
	}functionAe(t,
	e,
	n,
	i){
		n=n||{
			
		},
		n.format="export",
		t.Aa&&(n.auth=t.Aa);varr=(t.F.lb?"https://": "http://")+t.F.host+e+"?"+kb(n);t.f("Sending REST request for "+r);varo=newXMLHttpRequest;o.onreadystatechange=function(){
			if(i&&4===o.readyState){
				t.f("REST Response for "+r+" received. status:",
				o.status,
				"response:",
				o.responseText);vare=null;if(200<=o.status&&300>o.status){
					try{
						e=nb(o.responseText)
					}catch(n){
						Q("Failed to parse JSON response for "+r+": "+o.responseText)
					}i(null,
					e)
				}else401!==o.status&&404!==o.status&&Q("Got unsuccessful REST response for "+r+" Status: "+o.status),
				i(o.status);i=null
			}
		},
		o.open("GET",
		r,
		!0),
		o.send()
	}functionBe(t,
	e){
		this.value=t,
		this.children=e||Ce
	}functionDe(t){
		vare=Nd;returnr(t,
		function(t,
		n){
			e=e.set(newL(n),
			t)
		}),
		e
	}functionEe(t,
	e,
	n){
		if(null!=t.value&&n(t.value))return{
			path: G,
			value: t.value
		};if(e.e())returnnull;vari=E(e);returnt=t.children.get(i),
		null!==t?(e=Ee(t,
		H(e),
		n),
		null!=e?{
			path: newL(i).u(e.path),
			value: e.value
		}: null): null
	}functionFe(t,
	e){
		returnEe(t,
		e,
		function(){
			return!0
		})
	}functionMd(t,
	e,
	n){
		if(e.e())returnn;vari=E(e);returne=Md(t.children.get(i)||Nd,
		H(e),
		n),
		i=e.e()?t.children.remove(i): t.children.Oa(i,
		e),
		newBe(t.value,
		i)
	}functionGe(t,
	e){
		returnHe(t,
		G,
		e)
	}functionHe(t,
	e,
	n){
		vari={
			
		};returnt.children.ia(function(t,
		r){
			i[t]=He(r,
			e.u(t),
			n)
		}),
		n(e,
		t.value,
		i)
	}functionIe(t,
	e,
	n){
		returnJe(t,
		e,
		G,
		n)
	}functionJe(t,
	e,
	n,
	i){
		varr=t.value?i(n,
		t.value): !1;returnr?r: e.e()?null: (r=E(e),
		(t=t.children.get(r))?Je(t,
		H(e),
		n.u(r),
		i): null)
	}functionKe(t,
	e,
	n){
		vari=G;if(!e.e()){
			varr=!0;t.value&&(r=n(i,
			t.value)),
			!0===r&&(r=E(e),
			(t=t.children.get(r))&&Le(t,
			H(e),
			i.u(r),
			n))
		}
	}functionLe(t,
	e,
	n,
	i){
		if(e.e())returnt;t.value&&i(n,
		t.value);varr=E(e);return(t=t.children.get(r))?Le(t,
		H(e),
		n.u(r),
		i): Nd
	}functionKd(t,
	e){
		Me(t,
		G,
		e)
	}functionMe(t,
	e,
	n){
		t.children.ia(function(t,
		i){
			Me(i,
			e.u(t),
			n)
		}),
		t.value&&n(e,
		t.value)
	}functionNe(t,
	e){
		t.children.ia(function(t,
		n){
			n.value&&e(t,
			n.value)
		})
	}functionOe(t,
	e,
	n){
		this.type=Ed,
		this.source=Pe,
		this.path=t,
		this.Qb=e,
		this.Vd=n
	}functionQe(t,
	e,
	n,
	i){
		this.xe=t,
		this.pf=e,
		this.Ib=n,
		this.bf=i,
		K(!i||e,
		"Tagged queries must be from server.")
	}functionSe(t){
		this.W=t
	}functionUe(t,
	e,
	n){
		if(e.e())returnnewSe(newBe(n));vari=Fe(t.W,
		e);if(null!=i){
			varr=i.path,
			i=i.value;returne=O(r,
			e),
			i=i.K(e,
			n),
			newSe(t.W.set(r,
			i))
		}returnt=Md(t.W,
		e,
		newBe(n)),
		newSe(t)
	}functionVe(t,
	e,
	n){
		vari=t;returnib(n,
		function(t,
		n){
			i=Ue(i,
			e.u(t),
			n)
		}),
		i
	}functionWe(t,
	e){
		varn=Fe(t.W,
		e);returnnull!=n?t.W.get(n.path).Y(O(n.path,
		e)): null
	}functionXe(t){
		vare=[],
		n=t.W.value;returnnull!=n?n.L()||n.R(N,
		function(t,
		n){
			e.push(newF(t,
			n))
		}): t.W.children.ia(function(t,
		n){
			null!=n.value&&e.push(newF(t,
			n.value))
		}),
		e
	}functionYe(t,
	e){
		if(e.e())returnt;varn=We(t,
		e);returnnewSe(null!=n?newBe(n): t.W.subtree(e))
	}functionZe(t,
	e,
	n){
		if(null!=e.value)returnn.K(t,
		e.value);vari=null;returne.children.ia(function(e,
		r){
			".priority"===e?(K(null!==r.value,
			"Priority writes must always be leaf nodes"),
			i=r.value): n=Ze(t.u(e),
			r,
			n)
		}),
		n.Y(t).e()||null===i||(n=n.K(t.u(".priority"),
		i)),
		n
	}function$e(){
		this.T=Te,
		this.na=[],
		this.Mc=-1
	}functionaf(t,
	e){
		for(varn=0;n<t.na.length;n++){
			vari=t.na[n];if(i.kd===e)returni
		}returnnull
	}functionbf(t,
	e){
		returnt.Ga?t.path.contains(e): !!ua(t.children,
		function(n,
		i){
			returnt.path.u(i).contains(e)
		})
	}functiondf(t){
		returnt.visible
	}functioncf(t,
	e,
	n){
		for(vari=Te,
		r=0;r<t.length;++r){
			varo=t[r];if(e(o)){
				vara=o.path;if(o.Ga)n.contains(a)?(a=O(n,
				a),
				i=Ue(i,
				a,
				o.Ga)): a.contains(n)&&(a=O(a,
				n),
				i=Ue(i,
				G,
				o.Ga.Y(a)));else{
					if(!o.children)throwGc("WriteRecord should have .snap or .children");n.contains(a)?(a=O(n,
					a),
					i=Ve(i,
					a,
					o.children)): a.contains(n)&&(a=O(a,
					n),
					a.e()?i=Ve(i,
					G,
					o.children): (o=w(o.children,
					E(a)))&&(o=o.Y(H(a)),
					i=Ue(i,
					G,
					o)))
				}
			}
		}returni
	}functionef(t,
	e){
		this.Mb=t,
		this.W=e
	}functionff(){
		this.ya={
			
		}
	}functionhf(t){
		returnPa(ra(t.ya),
		function(t){
			return!de(t.V.o)
		})
	}functionjf(t,
	e){
		if(de(e.o))returngf(t);varn=e.va();returnw(t.ya,
		n)
	}functiongf(t){
		returnva(t.ya,
		function(t){
			returnde(t.V.o)
		})||null
	}functionkf(t){
		this.ta=Nd,
		this.jb=new$e,
		this.af={
			
		},
		this.lc={
			
		},
		this.Nc=t
	}functionlf(t,
	e,
	i,
	r,
	o){
		vara=t.jb,
		s=o;returnK(r>a.Mc,
		"Stacking an older write on top of newer ones"),
		n(s)||(s=!0),
		a.na.push({
			path: e,
			Ga: i,
			kd: r,
			visible: s
		}),
		s&&(a.T=Ue(a.T,
		e,
		i)),
		a.Mc=r,
		o?mf(t,
		newWb(Pe,
		e,
		i)): []
	}functionnf(t,
	e,
	n,
	i){
		varr=t.jb;returnK(i>r.Mc,
		"Stacking an older merge on top of newer ones"),
		r.na.push({
			path: e,
			children: n,
			kd: i,
			visible: !0
		}),
		r.T=Ve(r.T,
		e,
		n),
		r.Mc=i,
		n=De(n),
		mf(t,
		newxe(Pe,
		e,
		n))
	}functionof(t,
	e,
	n){
		n=n||!1;vari=af(t.jb,
		e);if(t.jb.Rd(e)){
			varr=Nd;returnnull!=i.Ga?r=r.set(G,
			!0): ib(i.children,
			function(t,
			e){
				r=r.set(newL(t),
				e)
			}),
			mf(t,
			newOe(i.path,
			r,
			n))
		}return[]
	}functionpf(t,
	e,
	n){
		returnn=De(n),
		mf(t,
		newxe(Re,
		e,
		n))
	}functionqf(t,
	e,
	n,
	i){
		if(i=rf(t,
		i),
		null!=i){
			varr=sf(i);returni=r.path,
			r=r.Ib,
			e=O(i,
			e),
			n=newWb(newQe(!1,
			!0,
			r,
			!0),
			e,
			n),
			tf(t,
			i,
			n)
		}return[]
	}functionuf(t,
	e,
	n,
	i){
		if(i=rf(t,
		i)){
			varr=sf(i);returni=r.path,
			r=r.Ib,
			e=O(i,
			e),
			n=De(n),
			n=newxe(newQe(!1,
			!0,
			r,
			!0),
			e,
			n),
			tf(t,
			i,
			n)
		}return[]
	}functionyf(t){
		returnGe(t,
		function(t,
		e,
		n){
			if(e&&null!=gf(e))return[gf(e)];vari=[];returne&&(i=hf(e)),
			r(n,
			function(t){
				i=i.concat(t)
			}),
			i
		})
	}functionBf(t,
	e){
		for(varn=0;n<e.length;++n){
			vari=e[n];if(!de(i.o)){
				vari=vf(i),
				r=t.lc[i];deletet.lc[i],
				deletet.af["_"+r]
			}
		}
	}functionxf(t,
	e,
	n){
		vari=e.path,
		o=Af(t,
		e);if(n=zf(t,
		n),
		e=t.Nc.Ye(e,
		o,
		n.xd,
		n.G),
		i=t.ta.subtree(i),
		o)K(null==gf(i.value),
		"If we're adding a query, it shouldn't be shadowed");elsefor(o=Ge(i,
		function(t,
		e,
		n){
			if(!t.e()&&e&&null!=gf(e))return[ue(gf(e))];vari=[];returne&&(i=i.concat(Qa(hf(e),
			function(t){
				returnt.V
			}))),
			r(n,
			function(t){
				i=i.concat(t)
			}),
			i
		}),
		i=0;i<o.length;++i)n=o[i],
		t.Nc.be(n,
		Af(t,
		n));returne
	}functionzf(t,
	e){
		varn=e.V,
		i=Af(t,
		n);return{
			xd: function(){
				return(e.C()||C).hash()
			},
			G: function(e){
				if("ok"===e){
					if(i){
						varr=n.path;if(e=rf(t,
						i)){
							varo=sf(e);e=o.path,
							o=o.Ib,
							r=O(e,
							r),
							r=newYb(newQe(!1,
							!0,
							o,
							!0),
							r),
							e=tf(t,
							e,
							r)
						}elsee=[]
					}elsee=mf(t,
					newYb(Re,
					n.path));returne
				}returnr="Unknown Error",
				"too_big"===e?r="The data requested exceeds the maximum size that can be accessed with a single request.": "permission_denied"==e?r="Client doesn't have permission to access the desired data.": "unavailable"==e&&(r="The service is unavailable"),
				r=Error(e+": "+r),
				r.code=e.toUpperCase(),
				t.kb(n,
				null,
				r)
			}
		}
	}functionvf(t){
		returnt.path.toString()+"$"+t.va()
	}functionsf(t){
		vare=t.indexOf("$");returnK(-1!==e&&e<t.length-1,
		"Bad queryKey."),
		{
			Ib: t.substr(e+1),
			path: newL(t.substr(0,
			e))
		}
	}functionrf(t,
	e){
		varn=t.af,
		i="_"+e;returniinn?n[i]: void0
	}functionAf(t,
	e){
		varn=vf(e);returnw(t.lc,
		n)
	}functiontf(t,
	e,
	n){
		vari=t.ta.get(e);returnK(i,
		"Missing sync point for query tag that we're tracking"),
		i.ab(n,
		newef(e,
		t.jb),
		null)
	}functionmf(t,
	e){
		returnCf(t,
		e,
		t.ta,
		null,
		newef(G,
		t.jb))
	}functionCf(t,
	e,
	n,
	i,
	r){
		if(e.path.e())returnDf(t,
		e,
		n,
		i,
		r);varo=n.get(G);null==i&&null!=o&&(i=o.gb(G));vara=[],
		s=E(e.path),
		c=e.Xc(s);if((n=n.children.get(s))&&c)varu=i?i.J(s): null,
		s=r.u(s),
		a=a.concat(Cf(t,
		c,
		n,
		u,
		s));returno&&(a=a.concat(o.ab(e,
		r,
		i))),
		a
	}functionDf(t,
	e,
	n,
	i,
	r){
		varo=n.get(G);null==i&&null!=o&&(i=o.gb(G));vara=[];returnn.children.ia(function(n,
		o){
			vars=i?i.J(n): null,
			c=r.u(n),
			u=e.Xc(n);u&&(a=a.concat(Df(t,
			u,
			o,
			s,
			c)))
		}),
		o&&(a=a.concat(o.ab(e,
		r,
		i))),
		a
	}functionEf(){
		this.children={
			
		},
		this.nd=0,
		this.value=null
	}functionFf(t,
	e,
	n){
		this.Gd=t?t: "",
		this.Zc=e?e: null,
		this.w=n?n: newEf
	}functionGf(t,
	e){
		for(varn,
		i=einstanceofL?e: newL(e),
		r=t;null!==(n=E(i));)r=newFf(n,
		r,
		w(r.w.children,
		n)||newEf),
		i=H(i);returnr
	}functionHf(t,
	e){
		K("undefined"!=typeofe,
		"Cannot set value to undefined"),
		t.w.value=e,
		If(t)
	}functionJf(t,
	e,
	n,
	i){
		n&&!i&&e(t),
		t.R(function(t){
			Jf(t,
			e,
			!0,
			i)
		}),
		n&&i&&e(t)
	}functionKf(t,
	e){
		for(varn=t.parent();null!==n&&!e(n);)n=n.parent()
	}functionIf(t){
		if(null!==t.Zc){
			vare=t.Zc,
			n=t.Gd,
			i=t.e(),
			r=v(e.w.children,
			n);i&&r?(deletee.w.children[n],
			e.w.nd--,
			If(e)): i||r||(e.w.children[n]=t.w,
			e.w.nd++,
			If(e))
		}
	}functionLf(t){
		K(ea(t)&&0<t.length,
		"Requires a non-empty array"),
		this.Vf=t,
		this.Oc={
			
		}
	}functionMf(t,
	e){
		K(Ta(t.Vf,
		function(t){
			returnt===e
		}),
		"Unknown event: "+e)
	}functionOf(){
		if(Lf.call(this,
		["online"]),
		this.jc=!0,
		"undefined"!=typeofwindow&&"undefined"!=typeofwindow.addEventListener){
			vart=this;window.addEventListener("online",
			function(){
				t.jc||(t.jc=!0,
				t.ge("online",
				!0))
			},
			!1),
			window.addEventListener("offline",
			function(){
				t.jc&&(t.jc=!1,
				t.ge("online",
				!1))
			},
			!1)
		}
	}functionPf(){
		Lf.call(this,
		["visible"]);vart,
		e;if("undefined"!=typeofdocument&&"undefined"!=typeofdocument.addEventListener&&("undefined"!=typeofdocument.hidden?(e="visibilitychange",
		t="hidden"): "undefined"!=typeofdocument.mozHidden?(e="mozvisibilitychange",
		t="mozHidden"): "undefined"!=typeofdocument.msHidden?(e="msvisibilitychange",
		t="msHidden"): "undefined"!=typeofdocument.webkitHidden&&(e="webkitvisibilitychange",
		t="webkitHidden")),
		this.Ob=!0,
		e){
			varn=this;document.addEventListener(e,
			function(){
				vare=!document[t];e!==n.Ob&&(n.Ob=e,
				n.ge("visible",
				e))
			},
			!1)
		}
	}functionTf(t){
		returnp(t)&&0!==t.length&&!Qf.test(t)
	}functionUf(t){
		returnnull===t||p(t)||ga(t)&&!Rc(t)||ia(t)&&v(t,
		".sv")
	}functionVf(t,
	e,
	i,
	r){
		r&&!n(e)||Wf(z(t,
		1,
		r),
		e,
		i)
	}functionWf(t,
	e,
	i){
		if(iinstanceofL&&(i=newvc(i,
		t)),
		!n(e))throwError(t+"contains undefined "+yc(i));if(ha(e))throwError(t+"contains a function "+yc(i)+" with contents: "+e.toString());if(Rc(e))throwError(t+"contains "+e.toString()+" "+yc(i));if(p(e)&&e.length>10485760/3&&10485760<wc(e))throwError(t+"contains a string greater than 10485760 utf8 bytes "+yc(i)+" ('"+e.substring(0,
		50)+"...')");if(ia(e)){
			varr=!1,
			o=!1;if(ib(e,
			function(e,
			n){
				if(".value"===e)r=!0;elseif(".priority"!==e&&".sv"!==e&&(o=!0,
				!Tf(e)))throwError(t+" contains an invalid key ("+e+") "+yc(i)+'.Keysmustbenon-emptystringsandcan\'tcontain".",
				"#",
				"$",
				"/",
				"[",
				or"]"');i.push(e),
				Wf(t,
				n,
				i),
				i.pop()
			}),
			r&&o)throwError(t+'contains".value"child'+yc(i)+" in addition to actual children.")
		}
	}functionXf(t,
	e,
	n){
		if(!ia(e)||ea(e))throwError(z(t,
		1,
		!1)+" must be an Object containing the children to replace.");if(v(e,
		".value"))throwError(z(t,
		1,
		!1)+'mustnotcontain".value".Tooverwritewithaleafvalue,
		justuse.set()instead.');Vf(t,
		e,
		n,
		!1)
	}functionYf(t,
	e,
	n){
		if(Rc(n))throwError(z(t,
		e,
		!1)+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Uf(n))throwError(z(t,
		e,
		!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).")
	}functionZf(t,
	e,
	i){
		if(!i||n(e))switch(e){
			case"value": case"child_added": case"child_removed": case"child_changed": case"child_moved": break;default: throwError(z(t,
			1,
			i)+'mustbeavalideventtype: "value",
			"child_added",
			"child_removed",
			"child_changed",
			or"child_moved".')
		}
	}function$f(t,
	e,
	i,
	r){
		if((!r||n(i))&&!Tf(i))throwError(z(t,
		e,
		r)+'wasaninvalidkey: "'+i+'".Firebasekeysmustbenon-emptystringsandcan\'tcontain".",
		"#",
		"$",
		"/",
		"[",
		or"]").')
	}functionag(t,
	e){
		if(!p(e)||0===e.length||Rf.test(e))throwError(z(t,
		1,
		!1)+'wasaninvalidpath: "'+e+'".Pathsmustbenon-emptystringsandcan\'tcontain".",
		"#",
		"$",
		"[",
		or"]"')
	}functionbg(t,
	e){
		if(".info"===E(e))throwError(t+" failed: Can't modify data under /.info/")
	}functioncg(t,
	e){
		if(!p(e))throwError(z(t,
		1,
		!1)+"must be a valid credential (a string).")
	}functiondg(t,
	e,
	n){
		if(!p(n))throwError(z(t,
		e,
		!1)+"must be a valid string.")
	}functioneg(t,
	e){
		if(dg(t,
		1,
		e),
		!Sf.test(e))throwError(z(t,
		1,
		!1)+"'"+e+"' is not a valid authentication provider.")
	}functionfg(t,
	e,
	i,
	r){
		if((!r||n(i))&&(!ia(i)||null===i))throwError(z(t,
		e,
		r)+"must be a valid object.")
	}functiongg(t,
	e,
	n){
		if(!ia(e)||!v(e,
		n))throwError(z(t,
		1,
		!1)+'mustcontainthekey"'+n+'"');if(!p(w(e,
		n)))throwError(z(t,
		1,
		!1)+'mustcontainthekey"'+n+'"withtype"string"')
	}functionhg(){
		this.set={
			
		}
	}functionig(t,
	e){
		r(t.set,
		function(t,
		n){
			e(n,
			t)
		})
	}functionpc(){
		this.m=this.A=null
	}functionjg(t,
	e){
		if(e.e())returnt.A=null,
		t.m=null,
		!0;if(null!==t.A){
			if(t.A.L())return!1;varn=t.A;returnt.A=null,
			n.R(N,
			function(e,
			n){
				t.nc(newL(e),
				n)
			}),
			jg(t,
			e)
		}returnnull!==t.m?(n=E(e),
		e=H(e),
		t.m.contains(n)&&jg(t.m.get(n),
		e)&&t.m.remove(n),
		t.m.e()?(t.m=null,
		!0): !1): !0
	}functionqc(t,
	e,
	n){
		null!==t.A?n(e,
		t.A): t.R(function(t,
		i){
			varr=newL(e.toString()+"/"+t);qc(i,
			r,
			n)
		})
	}functionlg(t,
	e,
	n){
		this.od=t||{
			
		},
		this.fe=e||{
			
		},
		this.$a=n||{
			
		},
		this.od.remember||(this.od.remember="default")
	}functionng(t){
		vare={
			
		},
		n={
			
		};returnib(t||{
			
		},
		function(t,
		i){
			0<=Na(mg,
			t)?e[t]=i: n[t]=i
		}),
		newlg(e,
		{
			
		},
		n)
	}functionog(t,
	e){
		this.Re=["session",
		t.Od,
		t.Db].join(":"),
		this.ce=e
	}functionpg(){
		return"undefined"!=typeofnavigator&&"string"==typeofnavigator.userAgent?navigator.userAgent: ""
	}functionqg(){
		return"undefined"!=typeofwindow&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pg())
	}functionrg(){
		return"undefined"!=typeoflocation&&/^file: \//.test(location.href)
	}functionsg(t){
		vare=pg();if(""===e)return!1;if("Microsoft Internet Explorer"===navigator.appName){
			if((e=e.match(/MSIE([0-9]{
				1,
				
			}[\.0-9]{
				0,
				
			})/))&&1<e.length)returnparseFloat(e[1])>=t
		}elseif(-1<e.indexOf("Trident")&&(e=e.match(/rv: ([0-9]{
			2,
			2
		}[\.0-9]{
			0,
			
		})/))&&1<e.length)returnparseFloat(e[1])>=t;return!1
	}functiontg(){
		vart,
		e=window.opener.frames;for(t=e.length-1;t>=0;t--)try{
			if(e[t].location.protocol===window.location.protocol&&e[t].location.host===window.location.host&&"__winchan_relay_frame"===e[t].name)returne[t]
		}catch(n){
			
		}returnnull
	}functionug(t,
	e,
	n){
		t.attachEvent?t.attachEvent("on"+e,
		n): t.addEventListener&&t.addEventListener(e,
		n,
		!1)
	}functionvg(t,
	e,
	n){
		t.detachEvent?t.detachEvent("on"+e,
		n): t.removeEventListener&&t.removeEventListener(e,
		n,
		!1)
	}functionwg(t){
		/^https?: \/\//.test(t)||(t=window.location.href);vare=/^(https?: \/\/[\-_a-zA-Z\.0-9: ]+)/.exec(t);returne?e[1]: t
	}functionxg(t){
		vare="";try{
			t=t.replace("#",
			"");varn=lb(t);n&&v(n,
			"__firebase_request_key")&&(e=w(n,
			"__firebase_request_key"))
		}catch(i){
			
		}returne
	}functionyg(){
		vart=Qc(kg);returnt.scheme+"://"+t.host+"/v2"
	}functionzg(t){
		returnyg()+"/"+t+"/auth/channel"
	}functionAg(t){
		vare=this;if(this.Ac=t,
		this.de="*",
		sg(8)?this.Rc=this.zd=tg(): (this.Rc=window.opener,
		this.zd=window),
		!e.Rc)throw"Unable to find relay frame";ug(this.zd,
		"message",
		q(this.ic,
		this)),
		ug(this.zd,
		"message",
		q(this.Bf,
		this));try{
			Bg(this,
			{
				a: "ready"
			})
		}catch(n){
			ug(this.Rc,
			"load",
			function(){
				Bg(e,
				{
					a: "ready"
				})
			})
		}ug(window,
		"unload",
		q(this.zg,
		this))
	}functionBg(t,
	e){
		e=B(e),
		sg(8)?t.Rc.doPost(e,
		t.de): t.Rc.postMessage(e,
		t.de)
	}functionCg(t){
		this.pc=Ga()+Ga()+Ga(),
		this.Ef=t
	}functionEg(t){
		vare=Error(w(Dg,
		t),
		t);returne.code=t,
		e
	}functionFg(t){
		vare;(e=!t.window_features)||(e=pg(),
		e=-1!==e.indexOf("Fennec/")||-1!==e.indexOf("Firefox/")&&-1!==e.indexOf("Android")),
		e&&(t.window_features=void0),
		t.window_name||(t.window_name="_blank"),
		this.options=t
	}functionGg(t){
		t.method||(t.method="GET"),
		t.headers||(t.headers={
			
		}),
		t.headers.content_type||(t.headers.content_type="application/json"),
		t.headers.content_type=t.headers.content_type.toLowerCase(),
		this.options=t
	}functionHg(t){
		this.pc=Ga()+Ga()+Ga(),
		this.Ef=t
	}functionIg(t){
		t.callback_parameter||(t.callback_parameter="callback"),
		this.options=t,
		window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{
			
		}
	}functionJg(t,
	e,
	n){
		setTimeout(function(){
			try{
				vari=document.createElement("script");i.type="text/javascript",
				i.id=t,
				i.async=!0,
				i.src=e,
				i.onerror=function(){
					vare=document.getElementById(t);null!==e&&e.parentNode.removeChild(e),
					n&&n(Eg("NETWORK_ERROR"))
				};varr=document.getElementsByTagName("head");(r&&0!=r.length?r[0]: document.documentElement).appendChild(i)
			}catch(o){
				n&&n(Eg("NETWORK_ERROR"))
			}
		},
		0)
	}functionKg(t,
	e,
	n,
	i){
		Lf.call(this,
		["auth_status"]),
		this.F=t,
		this.ef=e,
		this.Tg=n,
		this.Me=i,
		this.sc=newog(t,
		[Cc,
		P]),
		this.nb=null,
		this.Te=!1,
		Lg(this)
	}functionLg(t){
		P.get("redirect_request_id")&&Mg(t);vare=t.sc.get();e&&e.token?(Ng(t,
		e),
		t.ef(e.token,
		function(n,
		i){
			Og(t,
			n,
			i,
			!1,
			e.token,
			e)
		},
		function(e,
		n){
			Pg(t,
			"resumeSession()",
			e,
			n)
		})): Ng(t,
		null)
	}functionQg(t,
	e,
	n,
	i,
	r,
	o){
		"firebaseio-demo.com"===t.F.domain&&Q("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com."),
		t.ef(e,
		function(o,
		a){
			Og(t,
			o,
			a,
			!0,
			e,
			n,
			i||{
				
			},
			r)
		},
		function(e,
		n){
			Pg(t,
			"auth()",
			e,
			n,
			o)
		})
	}functionRg(t,
	e){
		t.sc.clear(),
		Ng(t,
		null),
		t.Tg(function(t,
		n){
			if("ok"===t)R(e,
			null);else{
				vari=(t||"error").toUpperCase(),
				r=i;n&&(r+=": "+n),
				r=Error(r),
				r.code=i,
				R(e,
				r)
			}
		})
	}functionOg(t,
	e,
	n,
	i,
	r,
	o,
	a,
	s){
		"ok"===e?(i&&(e=n.auth,
		o.auth=e,
		o.expires=n.expires,
		o.token=bd(r)?r: "",
		n=null,
		e&&v(e,
		"uid")?n=w(e,
		"uid"): v(o,
		"uid")&&(n=w(o,
		"uid")),
		o.uid=n,
		n="custom",
		e&&v(e,
		"provider")?n=w(e,
		"provider"): v(o,
		"provider")&&(n=w(o,
		"provider")),
		o.provider=n,
		t.sc.clear(),
		bd(r)&&(a=a||{
			
		},
		n=Cc,
		"sessionOnly"===a.remember&&(n=P),
		"none"!==a.remember&&t.sc.set(o,
		n)),
		Ng(t,
		o)),
		R(s,
		null,
		o)): (t.sc.clear(),
		Ng(t,
		null),
		o=t=(e||"error").toUpperCase(),
		n&&(o+=": "+n),
		o=Error(o),
		o.code=t,
		R(s,
		o))
	}functionPg(t,
	e,
	n,
	i,
	r){
		Q(e+" was canceled: "+i),
		t.sc.clear(),
		Ng(t,
		null),
		t=Error(i),
		t.code=n.toUpperCase(),
		R(r,
		t)
	}functionSg(t,
	e,
	n,
	i,
	r){
		Tg(t),
		n=newlg(i||{
			
		},
		{
			
		},
		n||{
			
		}),
		Ug(t,
		[Gg,
		Ig],
		"/auth/"+e,
		n,
		r)
	}functionVg(t,
	e,
	n,
	i){
		Tg(t);varr=[Fg,
		Hg];n=ng(n),
		"anonymous"===e||"password"===e?setTimeout(function(){
			R(i,
			Eg("TRANSPORT_UNAVAILABLE"))
		},
		0): (n.fe.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"==typeofscreen?.5*(screen.height-625): 0)+",left="+("object"==typeofscreen?.5*(screen.width-625): 0),
		n.fe.relay_url=zg(t.F.Db),
		n.fe.requestWithCredential=q(t.qc,
		t),
		Ug(t,
		r,
		"/auth/"+e,
		n,
		i))
	}functionMg(t){
		vare=P.get("redirect_request_id");if(e){
			varn=P.get("redirect_client_options");P.remove("redirect_request_id"),
			P.remove("redirect_client_options");vari=[Gg,
			Ig],
			e={
				requestId: e,
				requestKey: xg(document.location.hash)
			},
			n=newlg(n,
			{
				
			},
			e);t.Te=!0;try{
				document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,
				"")
			}catch(r){
				
			}Ug(t,
			i,
			"/auth/session",
			n,
			function(){
				this.Te=!1
			}.bind(t))
		}
	}functionUg(t,
	e,
	n,
	i,
	r){
		Wg(t,
		e,
		n,
		i,
		function(e,
		n){
			!e&&n&&n.token&&n.uid?Qg(t,
			n.token,
			n,
			i.od,
			function(t,
			e){
				t?R(r,
				t): R(r,
				null,
				e)
			}): R(r,
			e||Eg("UNKNOWN_ERROR"))
		})
	}functionWg(t,
	e,
	n,
	i,
	r){
		e=Pa(e,
		function(t){
			return"function"==typeoft.isAvailable&&t.isAvailable()
		}),
		0===e.length?setTimeout(function(){
			R(r,
			Eg("TRANSPORT_UNAVAILABLE"))
		},
		0): (e=new(e.shift())(i.fe),
		i=jb(i.$a),
		i.v="js-"+hb,
		i.transport=e.Cc(),
		i.suppress_status_codes=!0,
		t=yg()+"/"+t.F.Db+n,
		e.open(t,
		i,
		function(t,
		e){
			if(t)R(r,
			t);elseif(e&&e.error){
				varn=Error(e.error.message);n.code=e.error.code,
				n.details=e.error.details,
				R(r,
				n)
			}elseR(r,
			null,
			e)
		}))
	}functionNg(t,
	e){
		varn=null!==t.nb||null!==e;t.nb=e,
		n&&t.ge("auth_status",
		e),
		t.Me(null!==e)
	}functionTg(t){
		vare=t.F;if("firebaseio.com"!==e.domain&&"firebaseio-demo.com"!==e.domain&&"auth.firebase.com"===kg)throwError("This custom Firebase server ('"+t.F.domain+"') does not support delegated login.")
	}functionXg(t){
		this.ic=t,
		this.Nd=[],
		this.Sb=0,
		this.re=-1,
		this.Gb=null
	}functionYg(t,
	e,
	n){
		t.re=e,
		t.Gb=n,
		t.re<t.Sb&&(t.Gb(),
		t.Gb=null)
	}functionZg(t,
	e,
	n){
		for(t.Nd[e]=n;t.Nd[t.Sb];){
			vari=t.Nd[t.Sb];deletet.Nd[t.Sb];for(varr=0;r<i.length;++r)if(i[r]){
				varo=t;Db(function(){
					o.ic(i[r])
				})
			}if(t.Sb===t.re){
				t.Gb&&(clearTimeout(t.Gb),
				t.Gb(),
				t.Gb=null);break
			}t.Sb++
		}
	}function$g(t,
	e,
	n){
		this.se=t,
		this.f=Nc(t),
		this.ob=this.pb=0,
		this.Va=Qb(e),
		this.Zd=n,
		this.Hc=!1,
		this.jd=function(t){
			e.host!==e.Pa&&(t.ns=e.Db);varn,
			i=[];for(nint)t.hasOwnProperty(n)&&i.push(n+"="+t[n]);return(e.lb?"https://": "http://")+e.Pa+"/.lp?"+i.join("&")
		}
	}functiondh(t,
	e){
		varn=B(e).length;t.ob+=n,
		Nb(t.Va,
		"bytes_received",
		n)
	}functionch(t,
	e,
	n,
	i){
		if(this.jd=i,
		this.ib=n,
		this.Qe=newhg,
		this.ad=[],
		this.ue=Math.floor(1e8*Math.random()),
		this.Xd=!0,
		this.ie=Fc(),
		window["pLPCommand"+this.ie]=t,
		window["pRTLPCB"+this.ie]=e,
		t=document.createElement("iframe"),
		t.style.display="none",
		!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{
			t.contentWindow.document||Cb("No IE domain setting required")
		}catch(r){
			t.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"
		}t.contentDocument?t.fb=t.contentDocument: t.contentWindow?t.fb=t.contentWindow.document: t.document&&(t.fb=t.document),
		this.Ea=t,
		t="",
		this.Ea.src&&"javascript:"===this.Ea.src.substr(0,
		11)&&(t='<script>document.domain="'+document.domain+'";</script>'),
		t="<html><body>"+t+"</body></html>";try{
			this.Ea.fb.open(),
			this.Ea.fb.write(t),
			this.Ea.fb.close()
		}catch(o){
			Cb("frame writing exception"),
			o.stack&&Cb(o.stack),
			Cb(o)
		}
	}functionfh(t){
		if(t.me&&t.Xd&&t.Qe.count()<(0<t.ad.length?2: 1)){
			t.ue++;vare={
				
			};e.id=t.sg,
			e.pw=t.tg,
			e.ser=t.ue;for(vare=t.jd(e),
			n="",
			i=0;0<t.ad.length&&1870>=t.ad[0].kf.length+30+n.length;){
				varr=t.ad.shift(),
				n=n+"&seg"+i+"="+r.Kg+"&ts"+i+"="+r.Sg+"&d"+i+"="+r.kf;i++
			}returngh(t,
			e+n,
			t.ue),
			!0
		}return!1
	}functiongh(t,
	e,
	n){
		functioni(){
			t.Qe.remove(n),
			fh(t)
		}t.Qe.add(n,
		1);varr=setTimeout(i,
		Math.floor(25e3));eh(t,
		e,
		function(){
			clearTimeout(r),
			i()
		})
	}functioneh(t,
	e,
	n){
		setTimeout(function(){
			try{
				if(t.Xd){
					vari=t.Ea.fb.createElement("script");i.type="text/javascript",
					i.async=!0,
					i.src=e,
					i.onload=i.onreadystatechange=function(){
						vart=i.readyState;t&&"loaded"!==t&&"complete"!==t||(i.onload=i.onreadystatechange=null,
						i.parentNode&&i.parentNode.removeChild(i),
						n())
					},
					i.onerror=function(){
						Cb("Long-poll script failed to load: "+e),
						t.Xd=!1,
						t.close()
					},
					t.Ea.fb.body.appendChild(i)
				}
			}catch(r){
				
			}
		},
		Math.floor(1))
	}functionih(t,
	e,
	n){
		this.se=t,
		this.f=Nc(this.se),
		this.frames=this.Kc=null,
		this.ob=this.pb=this.cf=0,
		this.Va=Qb(e),
		this.eb=(e.lb?"wss://": "ws://")+e.Pa+"/.ws?v=5",
		"undefined"!=typeoflocation&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.eb+="&r=f"),
		e.host!==e.Pa&&(this.eb=this.eb+"&ns="+e.Db),
		n&&(this.eb=this.eb+"&s="+n)
	}functionlh(t,
	e){
		if(t.frames.push(e),
		t.frames.length==t.cf){
			varn=t.frames.join("");t.frames=null,
			n=nb(n),
			t.xg(n)
		}
	}functionkh(t){
		clearInterval(t.Kc),
		t.Kc=setInterval(function(){
			t.ua&&t.ua.send("0"),
			kh(t)
		},
		Math.floor(45e3))
	}functionmh(t){
		nh(this,
		t)
	}functionnh(t,
	e){
		varn=ih&&ih.isAvailable(),
		i=n&&!(Cc.wf||!0===Cc.get("previous_websocket_failure"));if(e.Ug&&(n||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),
		i=!0),
		i)t.gd=[ih];else{
			varr=t.gd=[];Xc(oh,
			function(t,
			e){
				e&&e.isAvailable()&&r.push(e)
			})
		}
	}functionph(t){
		if(0<t.gd.length)returnt.gd[0];throwError("No transports available")
	}functionqh(t,
	e,
	n,
	i,
	r,
	o){
		this.id=t,
		this.f=Nc("c:"+this.id+":"),
		this.ic=n,
		this.Wc=i,
		this.la=r,
		this.Oe=o,
		this.F=e,
		this.Md=[],
		this.ff=0,
		this.Of=newmh(e),
		this.Ua=0,
		this.f("Connection created"),
		rh(this)
	}functionrh(t){
		vare=ph(t.Of);t.I=newe("c:"+t.id+":"+t.ff++,
		t.F),
		t.Se=e.responsesRequiredToBeHealthy||0;varn=sh(t,
		t.I),
		i=th(t,
		t.I);t.hd=t.I,
		t.cd=t.I,
		t.D=null,
		t.Bb=!1,
		setTimeout(function(){
			t.I&&t.I.open(n,
			i)
		},
		Math.floor(0)),
		e=e.healthyTimeout||0,
		e>0&&(t.yd=setTimeout(function(){
			t.yd=null,
			t.Bb||(t.I&&102400<t.I.ob?(t.f("Connection exceeded healthy timeout but has received "+t.I.ob+" bytes.  Marking connection healthy."),
			t.Bb=!0,
			t.I.Ed()): t.I&&10240<t.I.pb?t.f("Connection exceeded healthy timeout but has sent "+t.I.pb+" bytes.  Leaving connection alive."): (t.f("Closing unhealthy connection after timeout."),
			t.close()))
		},
		Math.floor(e)))
	}functionth(t,
	e){
		returnfunction(n){
			e===t.I?(t.I=null,
			n||0!==t.Ua?1===t.Ua&&t.f("Realtime connection lost."): (t.f("Realtime connection failed."),
			"s-"===t.F.Pa.substr(0,
			2)&&(Cc.remove("host:"+t.F.host),
			t.F.Pa=t.F.host)),
			t.close()): e===t.D?(t.f("Secondary connection lost."),
			n=t.D,
			t.D=null,
			t.hd!==n&&t.cd!==n||t.close()): t.f("closing an old connection")
		}
	}functionsh(t,
	e){
		returnfunction(n){
			if(2!=t.Ua)if(e===t.cd){
				vari=Uc("t",
				n);if(n=Uc("d",
				n),
				"c"==i){
					if(i=Uc("t",
					n),
					"d"inn)if(n=n.d,
					"h"===i){
						vari=n.ts,
						r=n.v,
						o=n.h;t.Zd=n.s,
						Ec(t.F,
						o),
						0==t.Ua&&(t.I.start(),
						uh(t,
						t.I,
						i),
						"5"!==r&&Q("Protocol version mismatch detected"),
						n=t.Of,
						(n=1<n.gd.length?n.gd[1]: null)&&vh(t,
						n))
					}elseif("n"===i){
						for(t.f("recvd end transmission on primary"),
						t.cd=t.D,
						n=0;n<t.Md.length;++n)t.Id(t.Md[n]);t.Md=[],
						wh(t)
					}else"s"===i?(t.f("Connection shutdown command received. Shutting down..."),
					t.Oe&&(t.Oe(n),
					t.Oe=null),
					t.la=null,
					t.close()): "r"===i?(t.f("Reset packet received.  New host: "+n),
					Ec(t.F,
					n),
					1===t.Ua?t.close(): (xh(t),
					rh(t))): "e"===i?Oc("Server Error: "+n): "o"===i?(t.f("got pong on primary."),
					yh(t),
					zh(t)): Oc("Unknown control packet command: "+i)
				}else"d"==i&&t.Id(n)
			}elseif(e===t.D)if(i=Uc("t",
			n),
			n=Uc("d",
			n),
			"c"==i)"t"inn&&(n=n.t,
			"a"===n?Ah(t): "r"===n?(t.f("Got a reset on secondary, closing it"),
			t.D.close(),
			t.hd!==t.D&&t.cd!==t.D||t.close()): "o"===n&&(t.f("got pong on secondary."),
			t.Mf--,
			Ah(t)));else{
				if("d"!=i)throwError("Unknown protocol layer: "+i);t.Md.push(n)
			}elset.f("message on old connection")
		}
	}functionwh(t){
		t.hd===t.D&&t.cd===t.D&&(t.f("cleaning up and promoting a connection: "+t.D.se),
		t.I=t.D,
		t.D=null)
	}functionAh(t){
		0>=t.Mf?(t.f("Secondary connection is healthy."),
		t.Bb=!0,
		t.D.Ed(),
		t.D.start(),
		t.f("sending client ack on secondary"),
		t.D.send({
			t: "c",
			d: {
				t: "a",
				d: {
					
				}
			}
		}),
		t.f("Ending transmission on primary"),
		t.I.send({
			t: "c",
			d: {
				t: "n",
				d: {
					
				}
			}
		}),
		t.hd=t.D,
		wh(t)): (t.f("sending ping on secondary."),
		t.D.send({
			t: "c",
			d: {
				t: "p",
				d: {
					
				}
			}
		}))
	}functionyh(t){
		t.Bb||(t.Se--,
		0>=t.Se&&(t.f("Primary connection is healthy."),
		t.Bb=!0,
		t.I.Ed()))
	}functionvh(t,
	e){
		t.D=newe("c:"+t.id+":"+t.ff++,
		t.F,
		t.Zd),
		t.Mf=e.responsesRequiredToBeHealthy||0,
		t.D.open(sh(t,
		t.D),
		th(t,
		t.D)),
		setTimeout(function(){
			t.D&&(t.f("Timed out trying to upgrade."),
			t.D.close())
		},
		Math.floor(6e4))
	}functionuh(t,
	e,
	n){
		t.f("Realtime connection established."),
		t.I=e,
		t.Ua=1,
		t.Wc&&(t.Wc(n),
		t.Wc=null),
		0===t.Se?(t.f("Primary connection is healthy."),
		t.Bb=!0): setTimeout(function(){
			zh(t)
		},
		Math.floor(5e3))
	}functionzh(t){
		t.Bb||1!==t.Ua||(t.f("sending ping on primary."),
		Bh(t,
		{
			t: "c",
			d: {
				t: "p",
				d: {
					
				}
			}
		}))
	}functionBh(t,
	e){
		if(1!==t.Ua)throw"Connection is not connected";t.hd.send(e)
	}functionxh(t){
		t.f("Shutting down all connections"),
		t.I&&(t.I.close(),
		t.I=null),
		t.D&&(t.D.close(),
		t.D=null),
		t.yd&&(clearTimeout(t.yd),
		t.yd=null)
	}functionCh(t,
	e,
	n,
	i){
		this.id=Dh++,
		this.f=Nc("p:"+this.id+":"),
		this.xf=this.Fe=!1,
		this.$={
			
		},
		this.qa=[],
		this.Yc=0,
		this.Vc=[],
		this.oa=!1,
		this.Za=1e3,
		this.Fd=3e5,
		this.Hb=e,
		this.Uc=n,
		this.Pe=i,
		this.F=t,
		this.tb=this.Aa=this.Ia=this.Xe=null,
		this.Ob=!1,
		this.Td={
			
		},
		this.Jg=0,
		this.nf=!0,
		this.Lc=this.He=null,
		Eh(this,
		0),
		Pf.vb().Fb("visible",
		this.Ag,
		this),
		-1===t.host.indexOf("fblocal")&&Of.vb().Fb("online",
		this.yg,
		this)
	}functionGh(t,
	e){
		varn=e.Gg,
		i=n.path.toString(),
		r=n.va();t.f("Listen on "+i+" for "+r);varo={
			p: i
		};e.tag&&(o.q=ce(n.o),
		o.t=e.tag),
		o.h=e.xd(),
		t.Fa("q",
		o,
		function(o){
			vara=o.d,
			s=o.s;if(a&&"object"==typeofa&&v(a,
			"w")){
				varc=w(a,
				"w");ea(c)&&0<=Na(c,
				"no_index")&&Q("Using an unspecified index. Consider adding "+('".indexOn": "'+n.o.g.toString()+'"')+" at "+n.path.toString()+" to your security rules for better performance")
			}(t.$[i]&&t.$[i][r])===e&&(t.f("listen response",
			o),
			"ok"!==s&&Hh(t,
			i,
			r),
			e.G&&e.G(s,
			a))
		})
	}functionIh(t){
		vare=t.Aa;t.oa&&e&&t.Fa("auth",
		{
			cred: e.gg
		},
		function(n){
			vari=n.s;n=n.d||"error",
			"ok"!==i&&t.Aa===e&&deletet.Aa,
			e.of?"ok"!==i&&e.md&&e.md(i,
			n): (e.of=!0,
			e.zc&&e.zc(i,
			n))
		})
	}functionJh(t,
	e,
	n,
	i,
	r){
		n={
			p: n,
			d: i
		},
		t.f("onDisconnect "+e,
		n),
		t.Fa(e,
		n,
		function(t){
			r&&setTimeout(function(){
				r(t.s,
				t.d)
			},
			Math.floor(0))
		})
	}functionKh(t,
	e,
	i,
	r,
	o,
	a){
		r={
			p: i,
			d: r
		},
		n(a)&&(r.h=a),
		t.qa.push({
			action: e,
			Jf: r,
			G: o
		}),
		t.Yc++,
		e=t.qa.length-1,
		t.oa?Lh(t,
		e): t.f("Buffering put: "+i)
	}functionLh(t,
	e){
		varn=t.qa[e].action,
		i=t.qa[e].Jf,
		r=t.qa[e].G;t.qa[e].Hg=t.oa,
		t.Fa(n,
		i,
		function(i){
			t.f(n+" response",
			i),
			deletet.qa[e],
			t.Yc--,
			0===t.Yc&&(t.qa=[]),
			r&&r(i.s,
			i.d)
		})
	}functionEh(t,
	e){
		K(!t.Ia,
		"Scheduling a connect when we're already connected/ing?"),
		t.tb&&clearTimeout(t.tb),
		t.tb=setTimeout(function(){
			t.tb=null,
			Oh(t)
		},
		Math.floor(e))
	}functionOh(t){
		if(Ph(t)){
			t.f("Making a connection attempt"),
			t.He=(newDate).getTime(),
			t.Lc=null;vare=q(t.Id,
			t),
			n=q(t.Wc,
			t),
			i=q(t.Df,
			t),
			r=t.id+":"+Fh++;t.Ia=newqh(r,
			t.F,
			e,
			n,
			i,
			function(e){
				Q(e+" ("+t.F.toString()+")"),
				t.xf=!0
			})
		}
	}functionMh(t,
	e,
	n){
		n=n?Qa(n,
		function(t){
			returnVc(t)
		}).join("$"): "default",
		(t=Hh(t,
		e,
		n))&&t.G&&t.G("permission_denied")
	}functionHh(t,
	e,
	i){
		e=newL(e).toString();varr;returnn(t.$[e])?(r=t.$[e][i],
		deletet.$[e][i],
		0===pa(t.$[e])&&deletet.$[e]): r=void0,
		r
	}functionNh(t){
		Ih(t),
		r(t.$,
		function(e){
			r(e,
			function(e){
				Gh(t,
				e)
			})
		});for(vare=0;e<t.qa.length;e++)t.qa[e]&&Lh(t,
		e);for(;t.Vc.length;)e=t.Vc.shift(),
		Jh(t,
		e.action,
		e.$c,
		e.data,
		e.G)
	}functionPh(t){
		vare;returne=Of.vb().jc,
		!t.xf&&!t.Fe&&e
	}functionS(t,
	e,
	n){
		this.w=t,
		this.V=e,
		this.g=n
	}functionQh(t,
	e){
		this.F=t,
		this.Va=Qb(t),
		this.fd=null,
		this.da=newvb,
		this.Hd=1,
		this.Sa=null,
		e||0<=("object"==typeofwindow&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|googlewebmastertools|bingbot|yahoo!slurp|baiduspider|yandexbot|duckduckbot/i)?(this.ba=newye(this.F,
		q(this.Hb,
		this)),
		setTimeout(q(this.Uc,
		this,
		!0),
		0)): this.ba=this.Sa=newCh(this.F,
		q(this.Hb,
		this),
		q(this.Uc,
		this),
		q(this.Pe,
		this)),
		this.Qg=Rb(t,
		q(function(){
			returnnewLb(this.Va,
			this.ba)
		},
		this)),
		this.uc=newFf,
		this.De=newob;varn=this;this.Cd=newkf({
			Ye: function(t,
			e,
			i,
			r){
				returne=[],
				i=n.De.j(t.path),
				i.e()||(e=mf(n.Cd,
				newWb(Re,
				t.path,
				i)),
				setTimeout(function(){
					r("ok")
				},
				0)),
				e
			},
			be: ba
		}),
		Rh(this,
		"connected",
		!1),
		this.la=newpc,
		this.N=newKg(t,
		q(this.ba.N,
		this.ba),
		q(this.ba.he,
		this.ba),
		q(this.Me,
		this)),
		this.sd=0,
		this.Ee=null,
		this.M=newkf({
			Ye: function(t,
			e,
			i,
			r){
				returnn.ba.yf(t,
				i,
				e,
				function(e,
				i){
					varo=r(e,
					i);Ab(n.da,
					t.path,
					o)
				}),
				[]
			},
			be: function(t,
			e){
				n.ba.Pf(t,
				e)
			}
		})
	}functionSh(t){
		returnt=t.De.j(newL(".info/serverTimeOffset")).H()||0,
		(newDate).getTime()+t
	}functionTh(t){
		returnt=t={
			timestamp: Sh(t)
		},
		t.timestamp=t.timestamp||(newDate).getTime(),
		t
	}functionRh(t,
	e,
	n){
		e=newL("/.info/"+e),
		n=M(n);vari=t.De;i.Wd=i.Wd.K(e,
		n),
		n=mf(t.Cd,
		newWb(Re,
		e,
		n)),
		Ab(t.da,
		e,
		n)
	}functionVh(t){
		t.f("onDisconnectEvents");vare=Th(t),
		n=[];qc(oc(t.la,
		e),
		G,
		function(e,
		i){
			n=n.concat(mf(t.M,
			newWb(Re,
			e,
			i)));varr=Xh(t,
			e);Uh(t,
			r)
		}),
		t.la=newpc,
		Ab(t.da,
		G,
		n)
	}functionYh(t,
	e,
	n,
	i){
		varr=M(n);t.ba.Ne(e.toString(),
		r.H(!0),
		function(n,
		o){
			"ok"===n&&t.la.nc(e,
			r),
			Wh(i,
			n,
			o)
		})
	}functionZh(t,
	e,
	n,
	i,
	r){
		varo=M(n,
		i);t.ba.Ne(e.toString(),
		o.H(!0),
		function(n,
		i){
			"ok"===n&&t.la.nc(e,
			o),
			Wh(r,
			n,
			i)
		})
	}function$h(t,
	e,
	n,
	i){
		varr,
		o=!0;for(rinn)o=!1;o?(Cb("onDisconnect().update() called with empty data.  Don't do anything."),
		Wh(i,
		"ok")): t.ba.Cf(e.toString(),
		n,
		function(r,
		o){
			if("ok"===r)for(varainn){
				vars=M(n[a]);t.la.nc(e.u(a),
				s)
			}Wh(i,
			r,
			o)
		})
	}functionai(t,
	e,
	n){
		n=".info"===E(e.path)?t.Cd.Pb(e,
		n): t.M.Pb(e,
		n),
		yb(t.da,
		e.path,
		n)
	}functionWh(t,
	e,
	n){
		t&&Db(function(){
			if("ok"==e)t(null);else{
				vari=(e||"error").toUpperCase(),
				r=i;n&&(r+=": "+n),
				r=Error(r),
				r.code=i,
				t(r)
			}
		})
	}functionbi(t,
	e,
	i,
	r,
	o){
		functiona(){
			
		}t.f("transaction on "+e);vars=newU(t,
		e);if(s.Fb("value",
		a),
		i={
			path: e,
			update: i,
			G: r,
			status: null,
			Ff: Fc(),
			df: o,
			Lf: 0,
			je: function(){
				s.hc("value",
				a)
			},
			le: null,
			Ba: null,
			pd: null,
			qd: null,
			rd: null
		},
		r=t.M.za(e,
		void0)||C,
		i.pd=r,
		r=i.update(r.H()),
		n(r)){
			Wf("transaction failed: Data returned ",
			r,
			i.path),
			i.status=1,
			o=Gf(t.uc,
			e);varc=o.Ca()||[];c.push(i),
			Hf(o,
			c),
			"object"==typeofr&&null!==r&&v(r,
			".priority")?(c=w(r,
			".priority"),
			K(Uf(c),
			"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")): c=(t.M.za(e)||C).B().H(),
			o=Th(t),
			r=M(r,
			c),
			o=rc(r,
			o),
			i.qd=r,
			i.rd=o,
			i.Ba=t.Hd++,
			i=lf(t.M,
			e,
			o,
			i.Ba,
			i.df),
			Ab(t.da,
			e,
			i),
			ci(t)
		}elsei.je(),
		i.qd=null,
		i.rd=null,
		i.G&&(t=newS(i.pd,
		newU(t,
		i.path),
		N),
		i.G(null,
		!1,
		t))
	}functionci(t,
	e){
		varn=e||t.uc;if(e||di(t,
		n),
		null!==n.Ca()){
			vari=ei(t,
			n);K(0<i.length,
			"Sending zero length transaction queue"),
			Sa(i,
			function(t){
				return1===t.status
			})&&fi(t,
			n.path(),
			i)
		}elsen.wd()&&n.R(function(e){
			ci(t,
			e)
		})
	}functionfi(t,
	e,
	n){
		for(vari=Qa(n,
		function(t){
			returnt.Ba
		}),
		r=t.M.za(e,
		i)||C,
		i=r,
		r=r.hash(),
		o=0;o<n.length;o++){
			vara=n[o];K(1===a.status,
			"tryToSendTransactionQueue_: items in queue should all be run."),
			a.status=2,
			a.Lf++;vars=O(e,
			a.path),
			i=i.K(s,
			a.qd)
		}i=i.H(!0),
		t.ba.put(e.toString(),
		i,
		function(i){
			t.f("transaction put response",
			{
				path: e.toString(),
				status: i
			});varr=[];if("ok"===i){
				for(i=[],
				o=0;o<n.length;o++){
					if(n[o].status=3,
					r=r.concat(of(t.M,
					n[o].Ba)),
					n[o].G){
						vara=n[o].rd,
						s=newU(t,
						n[o].path);i.push(q(n[o].G,
						null,
						null,
						!0,
						newS(a,
						s,
						N)))
					}n[o].je()
				}for(di(t,
				Gf(t.uc,
				e)),
				ci(t),
				Ab(t.da,
				e,
				r),
				o=0;o<i.length;o++)Db(i[o])
			}else{
				if("datastale"===i)for(o=0;o<n.length;o++)n[o].status=4===n[o].status?5: 1;elsefor(Q("transaction at "+e.toString()+" failed: "+i),
				o=0;o<n.length;o++)n[o].status=5,
				n[o].le=i;Uh(t,
				e)
			}
		},
		r)
	}functionUh(t,
	e){
		varn=gi(t,
		e),
		i=n.path(),
		n=ei(t,
		n);returnhi(t,
		n,
		i),
		i
	}functionhi(t,
	e,
	i){
		if(0!==e.length){
			for(varr=[],
			o=[],
			a=Qa(e,
			function(t){
				returnt.Ba
			}),
			s=0;s<e.length;s++){
				varc,
				u=e[s],
				h=O(i,
				u.path),
				l=!1;if(K(null!==h,
				"rerunTransactionsUnderNode_: relativePath should not be null."),
				5===u.status)l=!0,
				c=u.le,
				o=o.concat(of(t.M,
				u.Ba,
				!0));elseif(1===u.status)if(25<=u.Lf)l=!0,
				c="maxretry",
				o=o.concat(of(t.M,
				u.Ba,
				!0));else{
					varf=t.M.za(u.path,
					a)||C;u.pd=f;vard=e[s].update(f.H());n(d)?(Wf("transaction failed: Data returned ",
					d,
					u.path),
					h=M(d),
					"object"==typeofd&&null!=d&&v(d,
					".priority")||(h=h.ga(f.B())),
					f=u.Ba,
					d=Th(t),
					d=rc(h,
					d),
					u.qd=h,
					u.rd=d,
					u.Ba=t.Hd++,
					Va(a,
					f),
					o=o.concat(lf(t.M,
					u.path,
					d,
					u.Ba,
					u.df)),
					o=o.concat(of(t.M,
					f,
					!0))): (l=!0,
					c="nodata",
					o=o.concat(of(t.M,
					u.Ba,
					!0)))
				}Ab(t.da,
				i,
				o),
				o=[],
				l&&(e[s].status=3,
				setTimeout(e[s].je,
				Math.floor(0)),
				e[s].G&&("nodata"===c?(u=newU(t,
				e[s].path),
				r.push(q(e[s].G,
				null,
				null,
				!1,
				newS(e[s].pd,
				u,
				N)))): r.push(q(e[s].G,
				null,
				Error(c),
				!1,
				null))))
			}for(di(t,
			t.uc),
			s=0;s<r.length;s++)Db(r[s]);ci(t)
		}
	}functiongi(t,
	e){
		for(varn,
		i=t.uc;null!==(n=E(e))&&null===i.Ca();)i=Gf(i,
		n),
		e=H(e);returni
	}functionei(t,
	e){
		varn=[];returnii(t,
		e,
		n),
		n.sort(function(t,
		e){
			returnt.Ff-e.Ff
		}),
		n
	}functionii(t,
	e,
	n){
		vari=e.Ca();if(null!==i)for(varr=0;r<i.length;r++)n.push(i[r]);e.R(function(e){
			ii(t,
			e,
			n)
		})
	}functiondi(t,
	e){
		varn=e.Ca();if(n){
			for(vari=0,
			r=0;r<n.length;r++)3!==n[r].status&&(n[i]=n[r],
			i++);n.length=i,
			Hf(e,
			0<n.length?n: null)
		}e.R(function(e){
			di(t,
			e)
		})
	}functionXh(t,
	e){
		varn=gi(t,
		e).path(),
		i=Gf(t.uc,
		e);returnKf(i,
		function(e){
			ji(t,
			e)
		}),
		ji(t,
		i),
		Jf(i,
		function(e){
			ji(t,
			e)
		}),
		n
	}functionji(t,
	e){
		varn=e.Ca();if(null!==n){
			for(vari=[],
			r=[],
			o=-1,
			a=0;a<n.length;a++)4!==n[a].status&&(2===n[a].status?(K(o===a-1,
			"All SENT items should be at beginning of queue."),
			o=a,
			n[a].status=4,
			n[a].le="set"): (K(1===n[a].status,
			"Unexpected transaction status in abort"),
			n[a].je(),
			r=r.concat(of(t.M,
			n[a].Ba,
			!0)),
			n[a].G&&i.push(q(n[a].G,
			null,
			Error("set"),
			!1,
			null))));for(-1===o?Hf(e,
			null): n.length=o+1,
			Ab(t.da,
			e.path(),
			r),
			a=0;a<i.length;a++)Db(i[a])
		}
	}functionW(){
		this.oc={
			
		},
		this.Qf=!1
	}functionX(t,
	e){
		this.bd=t,
		this.ra=e
	}functionY(t,
	e,
	n,
	i){
		this.k=t,
		this.path=e,
		this.o=n,
		this.kc=i
	}functionki(t){
		vare=null,
		n=null;if(t.ma&&(e=nd(t)),
		t.pa&&(n=pd(t)),
		t.g===Od){
			if(t.ma){
				if("[MIN_NAME]"!=md(t))throwError("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!=typeofe)throwError("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")
			}if(t.pa){
				if("[MAX_NAME]"!=od(t))throwError("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!=typeofn)throwError("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")
			}
		}elseif(t.g===N){
			if(null!=e&&!Uf(e)||null!=n&&!Uf(n))throwError("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
		}elseif(K(t.ginstanceofSd||t.g===Yd,
		"unknown index type."),
		null!=e&&"object"==typeofe||null!=n&&"object"==typeofn)throwError("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
	}functionli(t){
		if(t.ma&&t.pa&&t.ja&&(!t.ja||""===t.Nb))throwError("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")
	}functionmi(t,
	e){
		if(!0===t.kc)throwError(e+": You can't combine multiple orderBy calls.")
	}functionni(t,
	e,
	n){
		vari={
			cancel: null,
			Ma: null
		};if(e&&n)i.cancel=e,
		A(t,
		3,
		i.cancel,
		!0),
		i.Ma=n,
		mb(t,
		4,
		i.Ma);elseif(e)if("object"==typeofe&&null!==e)i.Ma=e;else{
			if("function"!=typeofe)throwError(z(t,
			3,
			!0)+" must either be a cancel callback or a context object.");i.cancel=e
		}returni
	}functionU(t,
	e){
		varn,
		i,
		r;if(tinstanceofQh)n=t,
		i=e;else{
			x("new Firebase",
			1,
			2,
			arguments.length),
			i=Qc(arguments[0]),
			n=i.Rg,
			"firebase"===i.domain&&Pc(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),
			n&&"undefined"!=n||Pc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),
			i.lb||"undefined"!=typeofwindow&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."),
			n=newDc(i.host,
			i.lb,
			n,
			"ws"===i.scheme||"wss"===i.scheme),
			i=newL(i.$c),
			r=i.toString();varo;if(!(o=!p(n.host)||0===n.host.length||!Tf(n.Db))&&(o=0!==r.length)&&(r&&(r=r.replace(/^\/*\.info(\/|$)/,
			"/")),
			o=!(p(r)&&0!==r.length&&!Rf.test(r))),
			o)throwError(z("new Firebase",
			1,
			!1)+'mustbeavalidfirebaseURLandthepathcan\'tcontain".",
			"#",
			"$",
			"[",
			or"]".');if(e)if(einstanceofW)r=e;else{
				if(!p(e))throwError("Expected a valid Firebase.Context for second argument to new Firebase()");r=W.vb(),
				n.Od=e
			}elser=W.vb();o=n.toString();vara=w(r.oc,
			o);a||(a=newQh(n,
			r.Qf),
			r.oc[o]=a),
			n=a
		}Y.call(this,
		n,
		i,
		$d,
		!1)
	}functionMc(t,
	e){
		K(!e||!0===t||!1===t,
		"Can't turn on custom loggers persistently."),
		!0===t?("undefined"!=typeofconsole&&("function"==typeofconsole.log?Bb=q(console.log,
		console): "object"==typeofconsole.log&&(Bb=function(t){
			console.log(t)
		})),
		e&&P.set("logging_enabled",
		!0)): t?Bb=t: (Bb=null,
		P.remove("logging_enabled"))
	}varg,
	aa=this,
	la=Date.now||function(){
		return+newDate
	},
	ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	Ea={
		'"':'\\"',
		"\\": "\\\\",
		"/": "\\/",
		"\b": "\\b",
		"\f": "\\f",
		"\n": "\\n",
		"\r": "\\r",
		"	": "\\t",
		"": "\\u000b"
	},
	Fa=/\uffff/.test("ï¿¿")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ha;t:{var Ia=aa.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break t}}Ha=""}ma(La,Ka),La.prototype.reset=function(){this.P[0]=1732584193,this.P[1]=4023233417,this.P[2]=2562383102,this.P[3]=271733878,this.P[4]=3285377520,this.ee=this.ac=0},La.prototype.update=function(t,e){if(null!=t){n(e)||(e=t.length);for(var i=e-this.Wa,r=0,o=this.ne,a=this.ac;e>r;){if(0==a)for(;i>=r;)Ma(this,t,r),r+=this.Wa;if(p(t)){for(;e>r;)if(o[a]=t.charCodeAt(r),++a,++r,a==this.Wa){Ma(this,o),a=0;break}}else for(;e>r;)if(o[a]=t[r],++a,++r,a==this.Wa){Ma(this,o),a=0;break}}this.ac=a,this.ee+=e}};var u=Array.prototype,Na=u.indexOf?function(t,e,n){return u.indexOf.call(t,e,n)}:function(t,e,n){if(n=null==n?0:0>n?Math.max(0,t.length+n):n,p(t))return p(e)&&1==e.length?t.indexOf(e,n):-1;for(;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Oa=u.forEach?function(t,e,n){u.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,r=p(t)?t.split(""):t,o=0;i>o;o++)o in r&&e.call(n,r[o],o,t)},Pa=u.filter?function(t,e,n){return u.filter.call(t,e,n)}:function(t,e,n){for(var i=t.length,r=[],o=0,a=p(t)?t.split(""):t,s=0;i>s;s++)if(s in a){var c=a[s];e.call(n,c,s,t)&&(r[o++]=c)}return r},Qa=u.map?function(t,e,n){return u.map.call(t,e,n)}:function(t,e,n){for(var i=t.length,r=Array(i),o=p(t)?t.split(""):t,a=0;i>a;a++)a in o&&(r[a]=e.call(n,o[a],a,t));return r},Ra=u.reduce?function(t,e,n,i){for(var r=[],o=1,a=arguments.length;a>o;o++)r.push(arguments[o]);return i&&(r[0]=q(e,i)),u.reduce.apply(t,r)}:function(t,e,n,i){var r=n;return Oa(t,function(n,o){r=e.call(i,r,n,o,t)}),r},Sa=u.every?function(t,e,n){return u.every.call(t,e,n)}:function(t,e,n){for(var i=t.length,r=p(t)?t.split(""):t,o=0;i>o;o++)if(o in r&&!e.call(n,r[o],o,t))return!1;return!0},Za=-1!=Ha.indexOf("Opera")||-1!=Ha.indexOf("OPR"),$a=-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE"),ab=-1!=Ha.indexOf("Gecko")&&-1==Ha.toLowerCase().indexOf("webkit")&&!(-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE")),bb=-1!=Ha.toLowerCase().indexOf("webkit");!function(){var t,e="";return Za&&aa.opera?(e=aa.opera.version,ha(e)?e():e):(ab?t=/rv\:([^\);]+)(\)|;)/:$a?t=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(t=/WebKit\/(\S+)/),t&&(e=(e=t.exec(Ha))?e[1]:""),$a&&(t=(t=aa.document)?t.documentMode:void 0,t>parseFloat(e))?String(t):e)}();var cb=null,db=null,eb=null,hb=hb||"2.2.9";ob.prototype.j=function(t){return this.Wd.Y(t)},ob.prototype.toString=function(){return this.Wd.toString()},pb.prototype.qf=function(){return null},pb.prototype.ze=function(){return null};var qb=new pb;rb.prototype.qf=function(t){var e=this.Ka.Q;return sb(e,t)?e.j().J(t):(e=null!=this.Kd?new tb(this.Kd,!0,!1):this.Ka.C(),this.Rf.xc(t,e))},rb.prototype.ze=function(t,e,n){var i=null!=this.Kd?this.Kd:ub(this.Ka);return t=this.Rf.oe(i,e,1,n,t),0===t.length?null:t[0]},xb.prototype.add=function(t){this.vd.push(t)},xb.prototype.Zb=function(){return this.ra};var Fb="value";Gb.prototype.Zb=function(){var t=this.$d.mc();return"value"===this.ud?t.path:t.parent().path},Gb.prototype.Ae=function(){return this.ud},Gb.prototype.Vb=function(){return this.ve.Vb(this)},Gb.prototype.toString=function(){return this.Zb().toString()+": "+this.ud+": "+B(this.$d.mf())},Hb.prototype.Zb=function(){return this.path},Hb.prototype.Ae=function(){return"cancel"},Hb.prototype.Vb=function(){return this.ve.Vb(this)},Hb.prototype.toString=function(){return this.path.toString()+": cancel"},tb.prototype.j=function(){return this.w},Kb.prototype.get=function(){var t=this.eg.get(),e=xa(t);if(this.Dd)for(var n in this.Dd)e[n]-=this.Dd[n];return this.Dd=t,e},Lb.prototype.If=function(){var t,e=this.fd.get(),n={},i=!1;for(t in e)0<e[t]&&v(this.Nf,t)&&(n[t]=e[t],i=!0);i&&this.ba.Ve(n),setTimeout(q(this.If,this),Math.floor(6e5*Math.random()))},Mb.prototype.get=function(){return xa(this.Ec)};var Ob={},Pb={};Wb.prototype.Xc=function(t){return this.path.e()?new Wb(this.source,G,this.Ga.J(t)):new Wb(this.source,H(this.path),this.Ga)},Wb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+"overwrite: "+this.Ga.toString()+")"},Yb.prototype.Xc=function(){return this.path.e()?new Yb(this.source,G):new Yb(this.source,H(this.path))},Yb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+"listen_complete)"},g=$b.prototype,g.Oa=function(t,e){return new $b(this.La,this.wa.Oa(t,e,this.La).X(null,null,!1,null,null))},g.remove=function(t){return new $b(this.La,this.wa.remove(t,this.La).X(null,null,!1,null,null))},g.get=function(t){for(var e,n=this.wa;!n.e();){if(e=this.La(t,n.key),0===e)return n.value;0>e?n=n.left:e>0&&(n=n.right)}return null},g.e=function(){return this.wa.e()},g.count=function(){return this.wa.count()},g.Sc=function(){return this.wa.Sc()},g.fc=function(){return this.wa.fc()},g.ia=function(t){return this.wa.ia(t)},g.Xb=function(t){return new cc(this.wa,null,this.La,!1,t)},g.Yb=function(t,e){return new cc(this.wa,t,this.La,!1,e)},g.$b=function(t,e){return new cc(this.wa,t,this.La,!0,e)},g.sf=function(t){return new cc(this.wa,null,this.La,!0,t)},g=ec.prototype,g.X=function(t,e,n,i,r){return new ec(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)},g.count=function(){return this.left.count()+1+this.right.count()},g.e=function(){return!1},g.ia=function(t){return this.left.ia(t)||t(this.key,this.value)||this.right.ia(t)},g.Sc=function(){return fc(this).key},g.fc=function(){return this.right.e()?this.key:this.right.fc()},g.Oa=function(t,e,n){var i,r;return r=this,i=n(t,r.key),r=0>i?r.X(null,null,null,r.left.Oa(t,e,n),null):0===i?r.X(null,e,null,null,null):r.X(null,null,null,null,r.right.Oa(t,e,n)),gc(r)},g.remove=function(t,e){var n,i;if(n=this,0>e(t,n.key))n.left.e()||n.left.fa()||n.left.left.fa()||(n=ic(n)),n=n.X(null,null,null,n.left.remove(t,e),null);else{if(n.left.fa()&&(n=jc(n)),n.right.e()||n.right.fa()||n.right.left.fa()||(n=kc(n),n.left.left.fa()&&(n=jc(n),n=kc(n))),0===e(t,n.key)){if(n.right.e())return ac;i=fc(n.right),n=n.X(i.key,i.value,null,null,hc(n.right))}n=n.X(null,null,null,null,n.right.remove(t,e))}return gc(n)},g.fa=function(){return this.color},g=mc.prototype,g.X=function(){return this},g.Oa=function(t,e){return new ec(t,e,null)},g.remove=function(){return this},g.count=function(){return 0},g.e=function(){return!0},g.ia=function(){return!1},g.Sc=function(){return null},g.fc=function(){return null},g.fa=function(){return!1};var ac=new mc;g=L.prototype,g.toString=function(){for(var t="",e=this.Z;e<this.n.length;e++)""!==this.n[e]&&(t+="/"+this.n[e]);return t||"/"},g.slice=function(t){return this.n.slice(this.Z+(t||0))},g.parent=function(){if(this.Z>=this.n.length)return null;for(var t=[],e=this.Z;e<this.n.length-1;e++)t.push(this.n[e]);return new L(t,0)},g.u=function(t){for(var e=[],n=this.Z;n<this.n.length;n++)e.push(this.n[n]);if(t instanceof L)for(n=t.Z;n<t.n.length;n++)e.push(t.n[n]);else for(t=t.split("/"),n=0;n<t.length;n++)0<t[n].length&&e.push(t[n]);return new L(e,0)},g.e=function(){return this.Z>=this.n.length},g.ca=function(t){if(tc(this)!==tc(t))return!1;for(var e=this.Z,n=t.Z;e<=this.n.length;e++,n++)if(this.n[e]!==t.n[n])return!1;return!0},g.contains=function(t){var e=this.Z,n=t.Z;if(tc(this)>tc(t))return!1;for(;e<this.n.length;){if(this.n[e]!==t.n[n])return!1;++e,++n}return!0};var G=new L("");vc.prototype.push=function(t){0<this.Ra.length&&(this.Ha+=1),this.Ra.push(t),this.Ha+=wc(t),xc(this)},vc.prototype.pop=function(){var t=this.Ra.pop();this.Ha-=wc(t),0<this.Ra.length&&--this.Ha},zc.prototype.set=function(t,e){null==e?delete this.wc[t]:this.wc[t]=e},zc.prototype.get=function(t){return v(this.wc,t)?this.wc[t]:null},zc.prototype.remove=function(t){delete this.wc[t]},zc.prototype.wf=!0,g=Ac.prototype,g.set=function(t,e){null==e?this.Fc.removeItem(this.Pd+t):this.Fc.setItem(this.Pd+t,B(e))},g.get=function(t){return t=this.Fc.getItem(this.Pd+t),null==t?null:nb(t)},g.remove=function(t){this.Fc.removeItem(this.Pd+t)},g.wf=!1,g.toString=function(){return this.Fc.toString()};var Cc=Bc("localStorage"),P=Bc("sessionStorage");Dc.prototype.toString=function(){var t=(this.lb?"https: //":"http: //")+this.host;return this.Od&&(t+="<"+this.Od+">"),t};var Fc=function(){var t=1;return function(){return t++}}(),Bb=null,Lc=!0,Zc=/^-?\d{1,10}$/;cd.prototype.fg=function(t,e){if(null==t.Xa||null==e.Xa)throw Gc("Shouldonlycomparechild_events.");return this.g.compare(new F(t.Xa,t.Ja),new F(e.Xa,e.Ja))},g=id.prototype,g.Kf=function(t){return"value"===t},g.createEvent=function(t,e){var n=e.o.g;return new Gb("value",this,new S(t.Ja,e.mc(),n))},g.Vb=function(t){var e=this.sb;if("cancel"===t.Ae()){K(this.qb,"Raisingacanceleventonalistenerwithnocancelcallback");var n=this.qb;return function(){n.call(e,t.error)}}var i=this.Rb;return function(){i.call(e,t.$d)}},g.gf=function(t,e){return this.qb?new Hb(this,t,e):null},g.matches=function(t){return t instanceof id?t.Rb&&this.Rb?t.Rb===this.Rb&&t.sb===this.sb:!0:!1},g.tf=function(){return null!==this.Rb},g=jd.prototype,g.Kf=function(t){return t="children_added"===t?"child_added":t,("children_removed"===t?"child_removed":t)in this.ha},g.gf=function(t,e){return this.qb?new Hb(this,t,e):null},g.createEvent=function(t,e){K(null!=t.Xa,"ChildeventsshouldhaveachildName.");var n=e.mc().u(t.Xa);return new Gb(t.type,this,new S(t.Ja,n,e.o.g),t.Qd)},g.Vb=function(t){var e=this.sb;if("cancel"===t.Ae()){K(this.qb,"Raisingacanceleventonalistenerwithnocancelcallback");var n=this.qb;return function(){n.call(e,t.error)}}var i=this.ha[t.ud];return function(){i.call(e,t.$d,t.Qd)}},g.matches=function(t){if(t instanceof jd){if(!this.ha||!t.ha)return!0;if(this.sb===t.sb){var e=pa(t.ha);if(e===pa(this.ha)){if(1===e){var e=qa(t.ha),n=qa(this.ha);return!(n!==e||t.ha[e]&&this.ha[n]&&t.ha[e]!==this.ha[n])}return oa(this.ha,function(e,n){return t.ha[n]===e})}}}return!1},g.tf=function(){return null!==this.ha},g=kd.prototype,g.K=function(t,e,n,i,r,o){return K(t.Jc(this.g),"Anodemustbeindexedifonlyachildisupdated"),r=t.J(e),r.Y(i).ca(n.Y(i))&&r.e()==n.e()?t:(null!=o&&(n.e()?t.Da(e)?hd(o,new D("child_removed",r,e)):K(t.L(),"Achildremovewithoutanoldchildonlymakessenseonaleafnode"):r.e()?hd(o,new D("child_added",n,e)):hd(o,new D("child_changed",n,e,r))),t.L()&&n.e()?t:t.O(e,n).mb(this.g))},g.xa=function(t,e,n){return null!=n&&(t.L()||t.R(N,function(t,i){e.Da(t)||hd(n,new D("child_removed",i,t))}),e.L()||e.R(N,function(e,i){if(t.Da(e)){var r=t.J(e);r.ca(i)||hd(n,new D("child_changed",i,e,r))}else hd(n,new D("child_added",i,e))})),e.mb(this.g)},g.ga=function(t,e){return t.e()?C:t.ga(e)},g.Na=function(){return!1},g.Wb=function(){return this},g=ld.prototype,g.matches=function(t){return 0>=this.g.compare(this.ed,t)&&0>=this.g.compare(t,this.Gc)},g.K=function(t,e,n,i,r,o){return this.matches(new F(e,n))||(n=C),this.Ce.K(t,e,n,i,r,o)},g.xa=function(t,e,n){e.L()&&(e=C);var i=e.mb(this.g),i=i.ga(C),r=this;return e.R(N,function(t,e){r.matches(new F(t,e))||(i=i.O(t,C))}),this.Ce.xa(t,i,n)},g.ga=function(t){return t},g.Na=function(){return!0},g.Wb=function(){return this.Ce},g=qd.prototype,g.K=function(t,e,n,i,r,o){return this.sa.matches(new F(e,n))||(n=C),t.J(e).ca(n)?t:t.Eb()<this.ka?this.sa.Wb().K(t,e,n,i,r,o):sd(this,t,e,n,r,o)},g.xa=function(t,e,n){var i;if(e.L()||e.e())i=C.mb(this.g);else if(2*this.ka<e.Eb()&&e.Jc(this.g)){i=C.mb(this.g),e=this.Jb?e.$b(this.sa.Gc,this.g):e.Yb(this.sa.ed,this.g);for(var r=0;0<e.Qa.length&&r<this.ka;){var o,a=J(e);if(!(o=this.Jb?0>=this.g.compare(this.sa.ed,a):0>=this.g.compare(a,this.sa.Gc)))break;i=i.O(a.name,a.S),r++}}else{i=e.mb(this.g),i=i.ga(C);var s,c,u;if(this.Jb){e=i.sf(this.g),s=this.sa.Gc,c=this.sa.ed;var h=td(this.g);u=function(t,e){return h(e,t)}}else e=i.Xb(this.g),s=this.sa.ed,c=this.sa.Gc,u=td(this.g);for(var r=0,l=!1;0<e.Qa.length;)a=J(e),!l&&0>=u(s,a)&&(l=!0),(o=l&&r<this.ka&&0>=u(a,c))?r++:i=i.O(a.name,C)}return this.sa.Wb().xa(t,i,n)},g.ga=function(t){return t},g.Na=function(){return!0},g.Wb=function(){return this.sa.Wb()},yd.prototype.ab=function(t,e,n,i){var r,o=new gd;if(e.type===Xb)e.source.xe?n=zd(this,t,e.path,e.Ga,n,i,o):(K(e.source.pf,"Unknownsource."),r=e.source.bf,n=Ad(this,t,e.path,e.Ga,n,i,r,o));else if(e.type===Bd)e.source.xe?n=Cd(this,t,e.path,e.children,n,i,o):(K(e.source.pf,"Unknownsource."),r=e.source.bf,n=Dd(this,t,e.path,e.children,n,i,r,o));else if(e.type===Ed)if(e.Vd)if(e=e.path,null!=n.tc(e))n=t;else{if(r=new rb(n,t,i),i=t.Q.j(),e.e()||".priority"===E(e))Ib(t.C())?e=n.za(ub(t)):(e=t.C().j(),K(e instanceof T,"serverChildrenwouldbecompleteifleafnode"),e=n.yc(e)),e=this.U.xa(i,e,o);else{var a=E(e),s=n.xc(a,t.C());null==s&&sb(t.C(),a)&&(s=i.J(a)),e=null!=s?this.U.K(i,a,s,H(e),r,o):t.Q.j().Da(a)?this.U.K(i,a,C,H(e),r,o):i,e.e()&&Ib(t.C())&&(i=n.za(ub(t)),i.L()&&(e=this.U.xa(e,i,o)))}i=Ib(t.C())||null!=n.tc(G),n=Fd(t,e,i,this.U.Na())}else n=Gd(this,t,e.path,e.Qb,n,i,o);else{if(e.type!==Zb)throw Gc("Unknownoperationtype: "+e.type);i=e.path,e=t.C(),r=e.j(),a=e.ea||i.e(),n=Hd(this,new Id(t.Q,new tb(r,a,e.Ub)),i,n,qb,o)}return o=ra(o.bb),i=n,e=i.Q,e.ea&&(r=e.j().L()||e.j().e(),a=Jd(t),(0<o.length||!t.Q.ea||r&&!e.j().ca(a)||!e.j().B().ca(a.B()))&&o.push(Eb(Jd(i)))),new wd(n,o)};var Qd={};Pd.prototype.Ad=function(t,e){return 0!==this.compare(new F("[MIN_NAME]",t),new F("[MIN_NAME]",e))},Pd.prototype.Tc=function(){return Rd},ma(Sd,Pd),g=Sd.prototype,g.Ic=function(t){return!t.J(this.cc).e()},g.compare=function(t,e){var n=t.S.J(this.cc),i=e.S.J(this.cc),n=n.Dc(i);return 0===n?Ub(t.name,e.name):n},g.Pc=function(t,e){var n=M(t),n=C.O(this.cc,n);return new F(e,n)},g.Qc=function(){var t=C.O(this.cc,Td);return new F("[MAX_NAME]",t)},g.toString=function(){return this.cc},ma(Ud,Pd),g=Ud.prototype,g.compare=function(t,e){var n=t.S.B(),i=e.S.B(),n=n.Dc(i);return 0===n?Ub(t.name,e.name):n},g.Ic=function(t){return!t.B().e()},g.Ad=function(t,e){return!t.B().ca(e.B())},g.Tc=function(){return Rd},g.Qc=function(){return new F("[MAX_NAME]",new sc("[PRIORITY-POST]",Td))},g.Pc=function(t,e){var n=M(t);return new F(e,new sc("[PRIORITY-POST]",n))},g.toString=function(){return".priority"};var N=new Ud;ma(Vd,Pd),g=Vd.prototype,g.compare=function(t,e){return Ub(t.name,e.name)},g.Ic=function(){throw Gc("KeyIndex.isDefinedOnnotexpectedtobecalled.")},g.Ad=function(){return!1},g.Tc=function(){return Rd},g.Qc=function(){return new F("[MAX_NAME]",C)},g.Pc=function(t){return K(p(t),"KeyIndexindexValuemustalwaysbeastring."),new F(t,C)},g.toString=function(){return".key"};var Od=new Vd;ma(Wd,Pd),g=Wd.prototype,g.compare=function(t,e){var n=t.S.Dc(e.S);return 0===n?Ub(t.name,e.name):n},g.Ic=function(){return!0},g.Ad=function(t,e){return!t.ca(e)},g.Tc=function(){return Rd},g.Qc=function(){return Xd},g.Pc=function(t,e){var n=M(t);return new F(e,n)},g.toString=function(){return".value"};var Yd=new Wd,$d=new Zd;g=Zd.prototype,g.Ie=function(t){var e=ae(this);return e.ja=!0,e.ka=t,e.Nb="",e},g.Je=function(t){var e=ae(this);return e.ja=!0,e.ka=t,e.Nb="l",e},g.Ke=function(t){var e=ae(this);return e.ja=!0,e.ka=t,e.Nb="r",e},g.ae=function(t,e){var i=ae(this);return i.ma=!0,n(t)||(t=null),i.ec=t,null!=e?(i.Lb=!0,i.yb=e):(i.Lb=!1,i.yb=""),i},g.td=function(t,e){var i=ae(this);return i.pa=!0,n(t)||(t=null),i.bc=t,n(e)?(i.Tb=!0,i.wb=e):(i.Zg=!1,i.wb=""),i},g.toString=function(){return B(ce(this))},fe.prototype.get=function(t){var e=w(this.Bd,t);if(!e)throw Error("Noindexdefinedfor"+t);return e===Qd?null:e};var je=new fe({".priority":Qd},{".priority":N}),le=["object","boolean","number","string"];g=sc.prototype,g.L=function(){return!0},g.B=function(){return this.aa},g.ga=function(t){return new sc(this.A,t)},g.J=function(t){return".priority"===t?this.aa:C},g.Y=function(t){return t.e()?this:".priority"===E(t)?this.aa:C},g.Da=function(){return!1},g.rf=function(){return null},g.O=function(t,e){return".priority"===t?this.ga(e):e.e()&&".priority"!==t?this:C.O(t,e).ga(this.aa)},g.K=function(t,e){var n=E(t);return null===n?e:e.e()&&".priority"!==n?this:(K(".priority"!==n||1===tc(t),".prioritymustbethelasttokeninapath"),this.O(n,C.K(H(t),e)))},g.e=function(){return!1},g.Eb=function(){return 0},g.R=function(){return!1},g.H=function(t){return t&&!this.B().e()?{".value":this.Ca(),".priority":this.B().H()}:this.Ca()},g.hash=function(){if(null===this.Cb){var t="";this.aa.e()||(t+="priority: "+me(this.aa.H())+": ");var e=typeof this.A,t=t+(e+": "),t="number"===e?t+Yc(this.A):t+this.A;this.Cb=Ic(t)}return this.Cb},g.Ca=function(){return this.A},g.Dc=function(t){if(t===C)return 1;if(t instanceof T)return-1;K(t.L(),"Unknownnodetype");var e=typeof t.A,n=typeof this.A,i=Na(le,e),r=Na(le,n);return K(i>=0,"Unknownleaftype: "+e),K(r>=0,"Unknownleaftype: "+n),i===r?"object"===n?0:this.A<t.A?-1:this.A===t.A?0:1:r-i},g.mb=function(){return this},g.Jc=function(){return!0},g.ca=function(t){return t===this?!0:t.L()?this.A===t.A&&this.aa.ca(t.aa):!1},g.toString=function(){return B(this.H(!0))},g=T.prototype,g.L=function(){return!1},g.B=function(){return this.aa||C},g.ga=function(t){return this.m.e()?this:new T(this.m,t,this.xb)},g.J=function(t){return".priority"===t?this.B():(t=this.m.get(t),null===t?C:t)},g.Y=function(t){var e=E(t);return null===e?this:this.J(e).Y(H(t))},g.Da=function(t){return null!==this.m.get(t)},g.O=function(t,e){if(K(e,"Weshouldalwaysbepassingsnapshotnodes"),".priority"===t)return this.ga(e);var n,i,r=new F(t,e);return e.e()?(n=this.m.remove(t),r=ie(this.xb,r,this.m)):(n=this.m.Oa(t,e),r=ge(this.xb,r,this.m)),i=n.e()?C:this.aa,new T(n,i,r)},g.K=function(t,e){var n=E(t);if(null===n)return e;K(".priority"!==E(t)||1===tc(t),".prioritymustbethelasttokeninapath");var i=this.J(n).K(H(t),e);return this.O(n,i)},g.e=function(){return this.m.e()},g.Eb=function(){return this.m.count()};var ne=/^(0|[1-9]\d*)$/;g=T.prototype,g.H=function(t){if(this.e())return null;var e={},n=0,i=0,r=!0;if(this.R(N,function(o,a){e[o]=a.H(t),n++,r&&ne.test(o)?i=Math.max(i,Number(o)):r=!1}),!t&&r&&2*n>i){var o,a=[];for(o in e)a[o]=e[o];return a}return t&&!this.B().e()&&(e[".priority"]=this.B().H()),e},g.hash=function(){if(null===this.Cb){var t="";this.B().e()||(t+="priority: "+me(this.B().H())+": "),this.R(N,function(e,n){var i=n.hash();""!==i&&(t+=": "+e+": "+i)}),this.Cb=""===t?"":Ic(t)}return this.Cb},g.rf=function(t,e,n){return(n=oe(this,n))?(t=bc(n,new F(t,e)))?t.name:null:bc(this.m,t)},g.R=function(t,e){var n=oe(this,t);return n?n.ia(function(t){return e(t.name,t.S)}):this.m.ia(e)},g.Xb=function(t){return this.Yb(t.Tc(),t)},g.Yb=function(t,e){var n=oe(this,e);if(n)return n.Yb(t,function(t){return t});for(var n=this.m.Yb(t.name,Sb),i=dc(n);null!=i&&0>e.compare(i,t);)J(n),i=dc(n);return n},g.sf=function(t){return this.$b(t.Qc(),t)},g.$b=function(t,e){var n=oe(this,e);if(n)return n.$b(t,function(t){return t});for(var n=this.m.$b(t.name,Sb),i=dc(n);null!=i&&0<e.compare(i,t);)J(n),i=dc(n);return n},g.Dc=function(t){return this.e()?t.e()?0:-1:t.L()||t.e()?1:t===Td?-1:0},g.mb=function(t){if(t===Od||ta(this.xb.dc,t.toString()))return this;var e=this.xb,n=this.m;K(t!==Od,"KeyIndexalwaysexistsandisn'tmeanttobeaddedtotheIndexMap.");for(var i=[],r=!1,n=n.Xb(Sb),o=J(n);o;)r=r||t.Ic(o.S),i.push(o),o=J(n);return i=r?he(i,td(t)):Qd,r=t.toString(),n=xa(e.dc),n[r]=t,t=xa(e.Bd),t[r]=i,new T(this.m,this.aa,new fe(t,n))},g.Jc=function(t){return t===Od||ta(this.xb.dc,t.toString())},g.ca=function(t){if(t===this)return!0;if(t.L())return!1;if(this.B().ca(t.B())&&this.m.count()===t.m.count()){var e=this.Xb(N);t=t.Xb(N);for(var n=J(e),i=J(t);n&&i;){if(n.name!==i.name||!n.S.ca(i.S))return!1;n=J(e),i=J(t)}return null===n&&null===i}return!1},g.toString=function(){return B(this.H(!0))};var pe=Math.log(2),C=new T(new $b(Vb),null,je);ma(se,T),g=se.prototype,g.Dc=function(t){return t===this?0:1},g.ca=function(t){return t===this},g.B=function(){return this},g.J=function(){return C},g.e=function(){return!1};var Td=new se,Rd=new F("[MIN_NAME]",C),Xd=new F("[MAX_NAME]",Td);Id.prototype.C=function(){return this.Yd},g=te.prototype,g.C=function(){return this.Ka.C().j()},g.gb=function(t){var e=ub(this.Ka);return e&&(de(this.V.o)||!t.e()&&!e.J(E(t)).e())?e.Y(t):null},g.e=function(){return 0===this.Ya.length},g.Pb=function(t){this.Ya.push(t)},g.kb=function(t,e){var n=[];if(e){K(null==t,"Acancelshouldcancelalleventregistrations.");var i=this.V.path;Oa(this.Ya,function(t){(t=t.gf(e,i))&&n.push(t)})}if(t){for(var r=[],o=0;o<this.Ya.length;++o){var a=this.Ya[o];if(a.matches(t)){if(t.tf()){r=r.concat(this.Ya.slice(o+1));break}}else r.push(a)}this.Ya=r}else this.Ya=[];return n},g.ab=function(t,e,n){t.type===Bd&&null!==t.source.Ib&&(K(ub(this.Ka),"Weshouldalwayshaveafullcachebeforehandlingmerges"),K(Jd(this.Ka),"Missingeventcache,
	eventhoughwehaveaservercache"));var i=this.Ka;return t=this.Hf.ab(i,t,e,n),e=this.Hf,n=t.ke,K(n.Q.j().Jc(e.U.g),"Eventsnapnotindexed"),K(n.C().j().Jc(e.U.g),"Serversnapnotindexed"),K(Ib(t.ke.C())||!Ib(i.C()),"Onceaserversnapiscomplete,
	itshouldnevergoback"),this.Ka=t.ke,ve(this,t.dg,t.ke.Q.j(),null)},xe.prototype.Xc=function(t){return this.path.e()?(t=this.children.subtree(new L(t)),t.e()?null:t.value?new Wb(this.source,G,t.value):new xe(this.source,G,t)):(K(E(this.path)===t,"Can'tgetamergeforachildnotonthepathoftheoperation"),new xe(this.source,H(this.path),this.children))},xe.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+"merge: "+this.children.toString()+")"},g=ye.prototype,g.yf=function(t,e,n,i){var r=t.path.toString();this.f("Listencalledfor"+r+""+t.va());var o=ze(t,n),a={};this.$[o]=a,t=ee(t.o);var s=this;Ae(this,r+".json",t,function(t,e){var c=e;404===t&&(t=c=null),null===t&&s.Hb(r,c,!1,n),w(s.$,o)===a&&i(t?401==t?"permission_denied":"rest_error: "+t:"ok",null)})},g.Pf=function(t,e){var n=ze(t,e);delete this.$[n]},g.N=function(t,e){this.Aa=t;var n=$c(t),i=n.data,n=n.Bc&&n.Bc.exp;e&&e("ok",{auth:i,expires:n})},g.he=function(t){this.Aa=null,t("ok",null)},g.Ne=function(){},g.Cf=function(){},g.Jd=function(){},g.put=function(){},g.zf=function(){},g.Ve=function(){};var Ce=new $b(function(t,e){return t===e?0:e>t?-1:1});g=Be.prototype,g.e=function(){return null===this.value&&this.children.e()},g.subtree=function(t){if(t.e())return this;var e=this.children.get(E(t));return null!==e?e.subtree(H(t)):Nd},g.set=function(t,e){if(t.e())return new Be(e,this.children);var n=E(t),i=(this.children.get(n)||Nd).set(H(t),e),n=this.children.Oa(n,i);return new Be(this.value,n)},g.remove=function(t){if(t.e())return this.children.e()?Nd:new Be(null,this.children);var e=E(t),n=this.children.get(e);return n?(t=n.remove(H(t)),e=t.e()?this.children.remove(e):this.children.Oa(e,t),null===this.value&&e.e()?Nd:new Be(this.value,e)):this},g.get=function(t){if(t.e())return this.value;var e=this.children.get(E(t));return e?e.get(H(t)):null};var Nd=new Be(null);Be.prototype.toString=function(){var t={};return Kd(this,function(e,n){t[e.toString()]=n.toString()}),B(t)},Oe.prototype.Xc=function(t){return this.path.e()?null!=this.Qb.value?(K(this.Qb.children.e(),"affectedTreeshouldnothaveoverlappingaffectedpaths."),this):(t=this.Qb.subtree(new L(t)),new Oe(G,t,this.Vd)):(K(E(this.path)===t,"operationForChildcalledforunrelatedchild."),new Oe(H(this.path),this.Qb,this.Vd))},Oe.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+"ackwriterevert="+this.Vd+"affectedTree="+this.Qb+")"};var Xb=0,Bd=1,Ed=2,Zb=3,Pe=new Qe(!0,!1,null,!1),Re=new Qe(!1,!0,null,!1);Qe.prototype.toString=function(){return this.xe?"user":this.bf?"server(queryID="+this.Ib+")":"server"};var Te=new Se(new Be(null));Se.prototype.Rd=function(t){return t.e()?Te:(t=Md(this.W,t,Nd),new Se(t))},Se.prototype.e=function(){return this.W.e()},Se.prototype.apply=function(t){return Ze(G,this.W,t)},g=$e.prototype,g.Rd=function(t){var e=Ua(this.na,function(e){return e.kd===t});K(e>=0,"removeWritecalledwithnonexistentwriteId.");var n=this.na[e];this.na.splice(e,1);for(var i=n.visible,o=!1,a=this.na.length-1;i&&a>=0;){var s=this.na[a];s.visible&&(a>=e&&bf(s,n.path)?i=!1:n.path.contains(s.path)&&(o=!0)),a--}if(i){if(o)this.T=cf(this.na,df,G),this.Mc=0<this.na.length?this.na[this.na.length-1].kd:-1;else if(n.Ga)this.T=this.T.Rd(n.path);else{var c=this;r(n.children,function(t,e){c.T=c.T.Rd(n.path.u(e))})}return!0}return!1},g.za=function(t,e,n,i){if(n||i){var r=Ye(this.T,t);return!i&&r.e()?e:i||null!=e||null!=We(r,G)?(r=cf(this.na,function(e){return(e.visible||i)&&(!n||!(0<=Na(n,e.kd)))&&(e.path.contains(t)||t.contains(e.path))},t),e=e||C,r.apply(e)):null}return r=We(this.T,t),null!=r?r:(r=Ye(this.T,t),r.e()?e:null!=e||null!=We(r,G)?(e=e||C,r.apply(e)):null)},g.yc=function(t,e){var n=C,i=We(this.T,t);if(i)i.L()||i.R(N,function(t,e){n=n.O(t,e)});else if(e){var r=Ye(this.T,t);e.R(N,function(t,e){var i=Ye(r,new L(t)).apply(e);n=n.O(t,i)}),Oa(Xe(r),function(t){n=n.O(t.name,t.S)})}else r=Ye(this.T,t),Oa(Xe(r),function(t){n=n.O(t.name,t.S)});return n},g.ld=function(t,e,n,i){return K(n||i,"EitherexistingEventSnaporexistingServerSnapmustexist"),t=t.u(e),null!=We(this.T,t)?null:(t=Ye(this.T,t),t.e()?i.Y(e):t.apply(i.Y(e)))},g.xc=function(t,e,n){t=t.u(e);var i=We(this.T,t);return null!=i?i:sb(n,e)?Ye(this.T,t).apply(n.j().J(e)):null},g.tc=function(t){return We(this.T,t)},g.oe=function(t,e,n,i,r,o){var a;if(t=Ye(this.T,t),a=We(t,G),null==a){if(null==e)return[];a=t.apply(e)}if(a=a.mb(o),a.e()||a.L())return[];for(e=[],t=td(o),r=r?a.$b(n,o):a.Yb(n,o),o=J(r);o&&e.length<i;)0!==t(o,n)&&e.push(o),o=J(r);return e},g=ef.prototype,g.za=function(t,e,n){return this.W.za(this.Mb,t,e,n)},g.yc=function(t){return this.W.yc(this.Mb,t)},g.ld=function(t,e,n){return this.W.ld(this.Mb,t,e,n)},g.tc=function(t){return this.W.tc(this.Mb.u(t))},g.oe=function(t,e,n,i,r){return this.W.oe(this.Mb,t,e,n,i,r)},g.xc=function(t,e){return this.W.xc(this.Mb,t,e)},g.u=function(t){return new ef(this.Mb.u(t),this.W)},g=ff.prototype,g.e=function(){return wa(this.ya)},g.ab=function(t,e,n){var i=t.source.Ib;if(null!==i)return i=w(this.ya,i),K(null!=i,"SyncTreegaveusanopforaninvalidquery."),i.ab(t,e,n);var o=[];return r(this.ya,function(i){o=o.concat(i.ab(t,e,n))}),o},g.Pb=function(t,e,n,i,r){var o=t.va(),a=w(this.ya,o);if(!a){var a=n.za(r?i:null),s=!1;a?s=!0:(a=i instanceof T?n.yc(i):C,s=!1),a=new te(t,new Id(new tb(a,s,!1),new tb(i,r,!1))),this.ya[o]=a}return a.Pb(e),we(a,e)},g.kb=function(t,e,n){var i=t.va(),o=[],a=[],s=null!=gf(this);if("default"===i){var c=this;r(this.ya,function(t,i){a=a.concat(t.kb(e,n)),t.e()&&(delete c.ya[i],de(t.V.o)||o.push(t.V))})}else{var u=w(this.ya,i);u&&(a=a.concat(u.kb(e,n)),u.e()&&(delete this.ya[i],de(u.V.o)||o.push(u.V)))}return s&&null==gf(this)&&o.push(new U(t.k,t.path)),{Ig:o,kg:a}},g.gb=function(t){var e=null;return r(this.ya,function(n){e=e||n.gb(t)}),e},kf.prototype.Pb=function(t,e){var n=t.path,i=null,r=!1;Ke(this.ta,n,function(t,e){var o=O(t,n);return i=e.gb(o),r=r||null!=gf(e),!i});var o=this.ta.get(n);o?(r=r||null!=gf(o),i=i||o.gb(G)):(o=new ff,this.ta=this.ta.set(n,o));var a;null!=i?a=!0:(a=!1,i=C,Ne(this.ta.subtree(n),function(t,e){var n=e.gb(G);n&&(i=i.O(t,n))}));var s=null!=jf(o,t);if(!s&&!de(t.o)){var c=vf(t);K(!(c in this.lc),"Viewdoesnotexist,
	butwehaveatag");var u=wf++;this.lc[c]=u,this.af["_"+u]=c}return a=o.Pb(t,e,new ef(n,this.jb),i,a),s||r||(o=jf(o,t),a=a.concat(xf(this,t,o))),a},kf.prototype.kb=function(t,e,n){var i=t.path,r=this.ta.get(i),o=[];if(r&&("default"===t.va()||null!=jf(r,t))){o=r.kb(t,e,n),r.e()&&(this.ta=this.ta.remove(i)),r=o.Ig,o=o.kg,e=-1!==Ua(r,function(t){return de(t.o)});var a=Ie(this.ta,i,function(t,e){return null!=gf(e)});if(e&&!a&&(i=this.ta.subtree(i),!i.e()))for(var i=yf(i),s=0;s<i.length;++s){var c=i[s],u=c.V,c=zf(this,c);this.Nc.Ye(u,Af(this,u),c.xd,c.G)}if(!a&&0<r.length&&!n)if(e)this.Nc.be(t,null);else{var h=this;Oa(r,function(t){t.va();var e=h.lc[vf(t)];h.Nc.be(t,e)})}Bf(this,r)}return o},kf.prototype.za=function(t,e){var n=this.jb,i=Ie(this.ta,t,function(e,n){var i=O(e,t);return(i=n.gb(i))?i:void 0});return n.za(t,i,e,!0)};var wf=1;g=Ff.prototype,g.Ca=function(){return this.w.value},g.clear=function(){this.w.value=null,this.w.children={},this.w.nd=0,If(this)},g.wd=function(){return 0<this.w.nd},g.e=function(){return null===this.Ca()&&!this.wd()},g.R=function(t){var e=this;r(this.w.children,function(n,i){t(new Ff(i,e,n))})},g.path=function(){return new L(null===this.Zc?this.Gd:this.Zc.path()+"/"+this.Gd)},g.name=function(){return this.Gd},g.parent=function(){return this.Zc},Lf.prototype.ge=function(t,e){for(var n=this.Oc[t]||[],i=0;i<n.length;i++)n[i].zc.apply(n[i].Ma,Array.prototype.slice.call(arguments,1))},Lf.prototype.Fb=function(t,e,n){Mf(this,t),this.Oc[t]=this.Oc[t]||[],this.Oc[t].push({zc:e,Ma:n}),(t=this.Be(t))&&e.apply(n,t)},Lf.prototype.hc=function(t,e,n){Mf(this,t),t=this.Oc[t]||[];for(var i=0;i<t.length;i++)if(t[i].zc===e&&(!n||n===t[i].Ma)){t.splice(i,1);break}};var Nf=function(){var t=0,e=[];return function(n){var i=n===t;t=n;for(var r=Array(8),o=7;o>=0;o--)r[o]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(n%64),n=Math.floor(n/64);if(K(0===n,"Cannotpushattime==0"),n=r.join(""),i){for(o=11;o>=0&&63===e[o];o--)e[o]=0;e[o]++}else for(o=0;12>o;o++)e[o]=Math.floor(64*Math.random());for(o=0;12>o;o++)n+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(e[o]);return K(20===n.length,"nextPushId: Lengthshouldbe20."),
n}}();ma(Of,Lf),Of.prototype.Be=function(t){return K("online"===t,"Unknowneventtype: "+t),[this.jc]},ca(Of),ma(Pf,Lf),Pf.prototype.Be=function(t){return K("visible"===t,"Unknowneventtype: "+t),[this.Ob]},ca(Pf);var Qf=/[\[\].#$\/\u0000-\u001F\u007F]/,Rf=/[\[\].#$\u0000-\u001F\u007F]/,Sf=/^[a-zA-Z][a-zA-Z._\-+]+$/;g=hg.prototype,g.add=function(t,e){this.set[t]=null!==e?e:!0},g.contains=function(t){return v(this.set,t)},g.get=function(t){return this.contains(t)?this.set[t]:void 0},g.remove=function(t){delete this.set[t]},g.clear=function(){this.set={}},g.e=function(){return wa(this.set)},g.count=function(){return pa(this.set)},g.keys=function(){var t=[];return r(this.set,function(e,n){t.push(n)}),t},pc.prototype.find=function(t){if(null!=this.A)return this.A.Y(t);if(t.e()||null==this.m)return null;var e=E(t);return t=H(t),this.m.contains(e)?this.m.get(e).find(t):null},pc.prototype.nc=function(t,e){if(t.e())this.A=e,this.m=null;else if(null!==this.A)this.A=this.A.K(t,e);else{null==this.m&&(this.m=new hg);var n=E(t);this.m.contains(n)||this.m.add(n,new pc),n=this.m.get(n),t=H(t),n.nc(t,e)}},pc.prototype.R=function(t){null!==this.m&&ig(this.m,function(e,n){t(e,n)})};var kg="auth.firebase.com",mg=["remember","redirectTo"];og.prototype.set=function(t,e){if(!e){if(!this.ce.length)throw Error("fb.login.SessionManager: Nostorageoptionsavailable!");e=this.ce[0]}e.set(this.Re,t)},og.prototype.get=function(){var t=Qa(this.ce,q(this.og,this)),t=Pa(t,function(t){return null!==t});return Xa(t,function(t,e){return ad(e.token)-ad(t.token)}),0<t.length?t.shift():null},og.prototype.og=function(t){try{var e=t.get(this.Re);if(e&&e.token)return e}catch(n){}return null},og.prototype.clear=function(){var t=this;Oa(this.ce,function(e){e.remove(t.Re)})},Ag.prototype.ic=function(t){var e,n=this;try{e=nb(t.data)}catch(i){}e&&"request"===e.a&&(vg(window,"message",this.ic),this.de=t.origin,this.Ac&&setTimeout(function(){n.Ac(n.de,e.d,function(t,e){n.bg=!e,n.Ac=void 0,Bg(n,{a:"response",d:t,forceKeepWindowOpen:e})})},0))},Ag.prototype.zg=function(){try{vg(this.zd,"message",this.Bf)}catch(t){}this.Ac&&(Bg(this,{a:"error",d:"unknownclosedwindow"}),this.Ac=void 0);try{window.close()}catch(e){}},Ag.prototype.Bf=function(t){if(this.bg&&"die"===t.data)try{window.close()}catch(e){}},Cg.prototype.open=function(t,e){P.set("redirect_request_id",this.pc),P.set("redirect_request_id",this.pc),e.requestId=this.pc,e.redirectTo=e.redirectTo||window.location.href,t+=(/\?/.test(t)?"":"?")+kb(e),window.location=t},Cg.isAvailable=function(){return!rg()&&!qg()},Cg.prototype.Cc=function(){return"redirect"};var Dg={NETWORK_ERROR:"UnabletocontacttheFirebaseserver.",SERVER_ERROR:"Anunknownservererroroccurred.",TRANSPORT_UNAVAILABLE:"Therearenologintransportsavailablefortherequestedmethod.",REQUEST_INTERRUPTED:"Thebrowserredirectedthepagebeforetheloginrequestcouldcomplete.",USER_CANCELLED:"Theusercancelledauthentication."};Fg.prototype.open=function(t,e,n){function i(t){if(o&&(document.body.removeChild(o),o=void 0),h&&(h=clearInterval(h)),vg(window,"message",r),vg(window,"unload",i),u&&!t)try{u.close()}catch(e){a.postMessage("die",c)}u=a=void 0}function r(t){if(t.origin===c)try{var e=nb(t.data);"ready"===e.a?a.postMessage(l,c):"error"===e.a?(i(!1),n&&(n(e.d),n=null)):"response"===e.a&&(i(e.forceKeepWindowOpen),n&&(n(null,e.d),n=null))}catch(r){}}var o,a,s=sg(8);if(!this.options.relay_url)return n(Error("invalidarguments: originofurlandrelay_urlmustmatch"));var c=wg(t);if(c!==wg(this.options.relay_url))n&&setTimeout(function(){n(Error("invalidarguments: originofurlandrelay_urlmustmatch"))},0);else{s&&(o=document.createElement("iframe"),o.setAttribute("src",this.options.relay_url),o.style.display="none",o.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(o),a=o.contentWindow),t+=(/\?/.test(t)?"":"?")+kb(e);var u=window.open(t,this.options.window_name,this.options.window_features);a||(a=u);var h=setInterval(function(){u&&u.closed&&(i(!1),n&&(n(Eg("USER_CANCELLED")),n=null))},500),l=B({a:"request",d:e});ug(window,"unload",i),ug(window,"message",r)}},Fg.isAvailable=function(){var t;return(t="postMessage"in window&&!rg())&&((t=qg()||"undefined"!=typeof navigator&&(!!pg().match(/Windows Phone/)||!!window.Windows&&/^ms-appx:/.test(location.href)))||(t=pg(),t="undefined"!=typeof navigator&&"undefined"!=typeof window&&!!(t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||t.match(/CriOS/)||t.match(/Twitter for iPhone/)||t.match(/FBAN\/FBIOS/)||window.navigator.standalone)),t=!t),t&&!pg().match(/PhantomJS/)},Fg.prototype.Cc=function(){return"popup"},Gg.prototype.open=function(t,e,n){function i(){n&&(n(Eg("REQUEST_INTERRUPTED")),n=null)}var r,o=new XMLHttpRequest,a=this.options.method.toUpperCase();if(ug(window,"beforeunload",i),o.onreadystatechange=function(){if(n&&4===o.readyState){var t;if(200<=o.status&&300>o.status){try{t=nb(o.responseText)}catch(e){}n(null,t)}else n(500<=o.status&&600>o.status?Eg("SERVER_ERROR"):Eg("NETWORK_ERROR"));n=null,vg(window,"beforeunload",i)}},"GET"===a)t+=(/\?/.test(t)?"":"?")+kb(e),r=null;else{var s=this.options.headers.content_type;"application/json"===s&&(r=B(e)),"application/x-www-form-urlencoded"===s&&(r=kb(e))}o.open(a,t,!0),t={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"},za(t,this.options.headers);for(var c in t)o.setRequestHeader(c,t[c]);o.send(r)},Gg.isAvailable=function(){var t;return(t=!!window.XMLHttpRequest)&&(t=pg(),t=!(t.match(/MSIE/)||t.match(/Trident/))||sg(10)),t},Gg.prototype.Cc=function(){return"json"},Hg.prototype.open=function(t,e,n){function i(){n&&(n(Eg("USER_CANCELLED")),n=null)}var r,o=this,a=Qc(kg);e.requestId=this.pc,e.redirectTo=a.scheme+": //"+a.host+"/blank/page.html",t+=/\?/.test(t)?"":"?",t+=kb(e),(r=window.open(t,"_blank","location=no"))&&ha(r.addEventListener)?(r.addEventListener("loadstart",function(t){var e;if(e=t&&t.url)t:{try{var s=document.createElement("a");s.href=t.url,e=s.host===a.host&&"/blank/page.html"===s.pathname;break t}catch(c){}e=!1}e&&(t=xg(t.url),r.removeEventListener("exit",i),r.close(),t=new lg(null,null,{requestId:o.pc,requestKey:t}),o.Ef.requestWithCredential("/auth/session",t,n),n=null)}),r.addEventListener("exit",i)):n(Eg("TRANSPORT_UNAVAILABLE"))},Hg.isAvailable=function(){return qg()},Hg.prototype.Cc=function(){return"redirect"},Ig.prototype.open=function(t,e,n){function i(){n&&(n(Eg("REQUEST_INTERRUPTED")),n=null)}function r(){setTimeout(function(){window.__firebase_auth_jsonp[o]=void 0,wa(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var t=document.getElementById(o);t&&t.parentNode.removeChild(t)}catch(e){}},1),vg(window,"beforeunload",i)}var o="fn"+(new Date).getTime()+Math.floor(99999*Math.random());e[this.options.callback_parameter]="__firebase_auth_jsonp."+o,t+=(/\?/.test(t)?"":"?")+kb(e),ug(window,"beforeunload",i),window.__firebase_auth_jsonp[o]=function(t){n&&(n(null,t),n=null),r()},Jg(o,t,n)},Ig.isAvailable=function(){return"undefined"!=typeof document&&null!=document.createElement},Ig.prototype.Cc=function(){return"json"},ma(Kg,Lf),g=Kg.prototype,g.ye=function(){return this.nb||null},g.te=function(t,e){Tg(this);var n=ng(t);n.$a._method="POST",this.qc("/users",n,function(t,n){t?R(e,t):R(e,t,n)})},g.Ue=function(t,e){var n=this;Tg(this);var i="/users/"+encodeURIComponent(t.email),r=ng(t);r.$a._method="DELETE",this.qc(i,r,function(t,i){!t&&i&&i.uid&&n.nb&&n.nb.uid&&n.nb.uid===i.uid&&Rg(n),R(e,t)})},g.qe=function(t,e){Tg(this);var n="/users/"+encodeURIComponent(t.email)+"/password",i=ng(t);i.$a._method="PUT",i.$a.password=t.newPassword,this.qc(n,i,function(t){R(e,t)})},g.pe=function(t,e){Tg(this);var n="/users/"+encodeURIComponent(t.oldEmail)+"/email",i=ng(t);i.$a._method="PUT",i.$a.email=t.newEmail,i.$a.password=t.password,this.qc(n,i,function(t){R(e,t)})},g.We=function(t,e){Tg(this);var n="/users/"+encodeURIComponent(t.email)+"/password",i=ng(t);i.$a._method="POST",this.qc(n,i,function(t){R(e,t)})},g.qc=function(t,e,n){Wg(this,[Gg,Ig],t,e,n)},g.Be=function(t){return K("auth_status"===t,'initial event must be of type "auth_status"'),this.Te?null:[this.nb]};var ah,bh;$g.prototype.open=function(t,e){this.hf=0,this.la=e,this.Af=new Xg(t),this.Ab=!1;var n=this;this.rb=setTimeout(function(){n.f("Timedouttryingtoconnect."),n.hb(),n.rb=null},Math.floor(3e4)),Sc(function(){if(!n.Ab){n.Ta=new ch(function(t,e,i,r,o){if(dh(n,arguments),n.Ta)if(n.rb&&(clearTimeout(n.rb),n.rb=null),n.Hc=!0,"start"==t)n.id=e,n.Gf=i;else{if("close"!==t)throw Error("Unrecognizedcommandreceived: "+t);e?(n.Ta.Xd=!1,Yg(n.Af,e,function(){n.hb()})):n.hb()}},function(t,e){dh(n,arguments),Zg(n.Af,t,e)},function(){n.hb()},n.jd);var t={start:"t"};t.ser=Math.floor(1e8*Math.random()),n.Ta.ie&&(t.cb=n.Ta.ie),t.v="5",n.Zd&&(t.s=n.Zd),"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(t.r="f"),t=n.jd(t),n.f("Connectingvialong-pollto"+t),eh(n.Ta,t,function(){})}})},$g.prototype.start=function(){var t=this.Ta,e=this.Gf;for(t.sg=this.id,t.tg=e,t.me=!0;fh(t););t=this.id,e=this.Gf,this.gc=document.createElement("iframe");var n={dframe:"t"};n.id=t,n.pw=e,this.gc.src=this.jd(n),this.gc.style.display="none",document.body.appendChild(this.gc)},$g.isAvailable=function(){return ah||!bh&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.Vg)&&!0},g=$g.prototype,g.Ed=function(){},g.dd=function(){this.Ab=!0,this.Ta&&(this.Ta.close(),this.Ta=null),this.gc&&(document.body.removeChild(this.gc),this.gc=null),this.rb&&(clearTimeout(this.rb),this.rb=null)},g.hb=function(){this.Ab||(this.f("Longpollisclosingitself"),this.dd(),this.la&&(this.la(this.Hc),this.la=null))},g.close=function(){this.Ab||(this.f("Longpollisbeingclosed."),this.dd())},g.send=function(t){t=B(t),this.pb+=t.length,Nb(this.Va,"bytes_sent",t.length),t=Jc(t),t=fb(t,!0),t=Wc(t,1840);for(var e=0;e<t.length;e++){var n=this.Ta;n.ad.push({Kg:this.hf,Sg:t.length,kf:t[e]}),n.me&&fh(n),this.hf++}},ch.prototype.close=function(){if(this.me=!1,this.Ea){this.Ea.fb.body.innerHTML="";var t=this;setTimeout(function(){null!==t.Ea&&(document.body.removeChild(t.Ea),t.Ea=null)},Math.floor(0))}var e=this.ib;e&&(this.ib=null,e())};var hh=null;"undefined"!=typeof MozWebSocket?hh=MozWebSocket:"undefined"!=typeof WebSocket&&(hh=WebSocket);var jh;ih.prototype.open=function(t,e){this.ib=e,this.xg=t,this.f("Websocketconnectingto"+this.eb),this.Hc=!1,Cc.set("previous_websocket_failure",!0);try{this.ua=new hh(this.eb)}catch(n){this.f("ErrorinstantiatingWebSocket.");var i=n.message||n.data;return i&&this.f(i),void this.hb()}var r=this;this.ua.onopen=function(){r.f("Websocketconnected."),r.Hc=!0},this.ua.onclose=function(){r.f("Websocketconnectionwasdisconnected."),r.ua=null,r.hb()},this.ua.onmessage=function(t){if(null!==r.ua)if(t=t.data,r.ob+=t.length,Nb(r.Va,"bytes_received",t.length),kh(r),null!==r.frames)lh(r,t);else{t:{if(K(null===r.frames,"Wealreadyhaveaframebuffer"),6>=t.length){var e=Number(t);if(!isNaN(e)){r.cf=e,r.frames=[],t=null;break t}}r.cf=1,r.frames=[]}null!==t&&lh(r,t)}},this.ua.onerror=function(t){r.f("WebSocketerror.Closingconnection."),(t=t.message||t.data)&&r.f(t),r.hb()}},ih.prototype.start=function(){},ih.isAvailable=function(){var t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var e=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);e&&1<e.length&&4.4>parseFloat(e[1])&&(t=!0)}return!t&&null!==hh&&!jh},ih.responsesRequiredToBeHealthy=2,ih.healthyTimeout=3e4,g=ih.prototype,g.Ed=function(){Cc.remove("previous_websocket_failure")},g.send=function(t){kh(this),t=B(t),this.pb+=t.length,Nb(this.Va,"bytes_sent",t.length),t=Wc(t,16384),1<t.length&&this.ua.send(String(t.length));for(var e=0;e<t.length;e++)this.ua.send(t[e])},g.dd=function(){this.Ab=!0,this.Kc&&(clearInterval(this.Kc),this.Kc=null),this.ua&&(this.ua.close(),this.ua=null)},g.hb=function(){this.Ab||(this.f("WebSocketisclosingitself"),this.dd(),this.ib&&(this.ib(this.Hc),this.ib=null))},g.close=function(){this.Ab||(this.f("WebSocketisbeingclosed"),this.dd())};var oh=[$g,ih];qh.prototype.Fa=function(t){Bh(this,{t:"d",d:t})},qh.prototype.Id=function(t){yh(this),this.ic(t)},qh.prototype.close=function(){2!==this.Ua&&(this.f("Closingrealtimeconnection."),this.Ua=2,xh(this),this.la&&(this.la(),this.la=null))};var Dh=0,Fh=0;g=Ch.prototype,g.Fa=function(t,e,n){var i=++this.Jg;t={r:i,a:t,b:e},this.f(B(t)),K(this.oa,"sendRequestcallwhenwe'renotconnectednotallowed."),this.Ia.Fa(t),n&&(this.Td[i]=n)},g.yf=function(t,e,n,i){var r=t.va(),o=t.path.toString();this.f("Listencalledfor"+o+""+r),this.$[o]=this.$[o]||{},K(!this.$[o][r],"listen()calledtwiceforsamepath/queryId."),t={G:i,xd:e,Gg:t,tag:n},this.$[o][r]=t,this.oa&&Gh(this,t)},g.N=function(t,e,n){this.Aa={gg:t,of:!1,zc:e,md:n},this.f("Authenticatingusingcredential: "+t),Ih(this),(e=40==t.length)||(t=$c(t).Bc,e="object"==typeof t&&!0===w(t,"admin")),e&&(this.f("Adminauthcredentialdetected.Reducingmaxreconnecttime."),this.Fd=3e4)},g.he=function(t){delete this.Aa,this.oa&&this.Fa("unauth",{},function(e){t(e.s,e.d)})},g.Pf=function(t,e){var n=t.path.toString(),i=t.va();if(this.f("Unlistencalledfor"+n+""+i),Hh(this,n,i)&&this.oa){var r=ce(t.o);this.f("Unlistenon"+n+"for"+i),n={p:n},e&&(n.q=r,n.t=e),this.Fa("n",n)}},g.Ne=function(t,e,n){this.oa?Jh(this,"o",t,e,n):this.Vc.push({$c:t,action:"o",data:e,G:n})},g.Cf=function(t,e,n){this.oa?Jh(this,"om",t,e,n):this.Vc.push({$c:t,action:"om",data:e,G:n})},g.Jd=function(t,e){this.oa?Jh(this,"oc",t,null,e):this.Vc.push({$c:t,action:"oc",data:null,G:e})},g.put=function(t,e,n,i){Kh(this,"p",t,e,n,i)},g.zf=function(t,e,n,i){Kh(this,"m",t,e,n,i)},g.Ve=function(t){this.oa&&(t={c:t},this.f("reportStats",t),this.Fa("s",t,function(t){"ok"!==t.s&&this.f("reportStats","Errorsendingstats: "+t.d)}))},g.Id=function(t){if("r"in t){this.f("fromserver: "+B(t));var e=t.r,n=this.Td[e];n&&(delete this.Td[e],n(t.b))}else{if("error"in t)throw"Aserver-sideerrorhasoccurred: "+t.error;"a"in t&&(e=t.a,n=t.b,this.f("handleServerMessage",e,n),"d"===e?this.Hb(n.p,n.d,!1,n.t):"m"===e?this.Hb(n.p,n.d,!0,n.t):"c"===e?Mh(this,n.p,n.q):"ac"===e?(t=n.s,e=n.d,n=this.Aa,delete this.Aa,n&&n.md&&n.md(t,e)):"sd"===e?this.Xe?this.Xe(n):"msg"in n&&"undefined"!=typeof console&&console.log("FIREBASE: "+n.msg.replace("\n","\nFIREBASE: ")):Oc("Unrecognizedactionreceivedfromserver: "+B(e)+"\nAreyouusingthelatestclient?"))}},g.Wc=function(t){this.f("connectionready"),this.oa=!0,this.Lc=(new Date).getTime(),this.Pe({serverTimeOffset:t-(new Date).getTime()}),this.nf&&(t={},t["sdk.js."+hb.replace(/\./g,"-")]=1,qg()&&(t["framework.cordova"]=1),this.Ve(t)),Nh(this),this.nf=!1,this.Uc(!0)},g.Ag=function(t){t&&!this.Ob&&this.Za===this.Fd&&(this.f("Windowbecamevisible.Reducingdelay."),this.Za=1e3,this.Ia||Eh(this,0)),this.Ob=t},g.yg=function(t){t?(this.f("Browserwentonline."),this.Za=1e3,this.Ia||Eh(this,0)):(this.f("Browserwentoffline.Killingconnection."),this.Ia&&this.Ia.close())},g.Df=function(){this.f("dataclientdisconnected"),this.oa=!1,this.Ia=null;for(var t=0;t<this.qa.length;t++){var e=this.qa[t];e&&"h"in e.Jf&&e.Hg&&(e.G&&e.G("disconnect"),delete this.qa[t],this.Yc--)}0===this.Yc&&(this.qa=[]),this.Td={},Ph(this)&&(this.Ob?this.Lc&&(3e4<(new Date).getTime()-this.Lc&&(this.Za=1e3),this.Lc=null):(this.f("Windowisn'tvisible.Delayingreconnect."),this.Za=this.Fd,this.He=(new Date).getTime()),t=Math.max(0,this.Za-((new Date).getTime()-this.He)),t*=Math.random(),this.f("Tryingtoreconnectin"+t+"ms"),Eh(this,t),this.Za=Math.min(this.Fd,1.3*this.Za)),this.Uc(!1)},g.zb=function(){this.Fe=!0,this.Ia?this.Ia.close():(this.tb&&(clearTimeout(this.tb),this.tb=null),this.oa&&this.Df())},g.rc=function(){this.Fe=!1,this.Za=1e3,this.Ia||Eh(this,0)};var V={mg:function(){ah=jh=!0}};V.forceLongPolling=V.mg,V.ng=function(){bh=!0},V.forceWebSockets=V.ng,V.Ng=function(t,e){t.k.Sa.Xe=e},V.setSecurityDebugCallback=V.Ng,V.Ze=function(t,e){t.k.Ze(e)},V.stats=V.Ze,V.$e=function(t,e){t.k.$e(e)},V.statsIncrementCounter=V.$e,V.sd=function(t){return t.k.sd},V.dataUpdateCount=V.sd,V.qg=function(t,e){t.k.Ee=e},V.interceptServerData=V.qg,V.wg=function(t){new Ag(t)},V.onPopupOpen=V.wg,V.Lg=function(t){kg=t},V.setAuthenticationServer=V.Lg,S.prototype.H=function(){return x("Firebase.DataSnapshot.val",0,0,arguments.length),this.w.H()},S.prototype.val=S.prototype.H,S.prototype.mf=function(){return x("Firebase.DataSnapshot.exportVal",0,0,arguments.length),this.w.H(!0)},S.prototype.exportVal=S.prototype.mf,S.prototype.lg=function(){return x("Firebase.DataSnapshot.exists",0,0,arguments.length),!this.w.e()},S.prototype.exists=S.prototype.lg,S.prototype.u=function(t){x("Firebase.DataSnapshot.child",0,1,arguments.length),ga(t)&&(t=String(t)),ag("Firebase.DataSnapshot.child",t);var e=new L(t),n=this.V.u(e);return new S(this.w.Y(e),n,N)},S.prototype.child=S.prototype.u,S.prototype.Da=function(t){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length),ag("Firebase.DataSnapshot.hasChild",t);var e=new L(t);return!this.w.Y(e).e()},S.prototype.hasChild=S.prototype.Da,S.prototype.B=function(){return x("Firebase.DataSnapshot.getPriority",0,0,arguments.length),this.w.B().H()},S.prototype.getPriority=S.prototype.B,S.prototype.forEach=function(t){if(x("Firebase.DataSnapshot.forEach",1,1,arguments.length),A("Firebase.DataSnapshot.forEach",1,t,!1),this.w.L())return!1;var e=this;return!!this.w.R(this.g,function(n,i){return t(new S(i,e.V.u(n),N))})},S.prototype.forEach=S.prototype.forEach,S.prototype.wd=function(){return x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length),this.w.L()?!1:!this.w.e()},S.prototype.hasChildren=S.prototype.wd,S.prototype.name=function(){return Q("Firebase.DataSnapshot.name()beingdeprecated.PleaseuseFirebase.DataSnapshot.key()instead."),x("Firebase.DataSnapshot.name",0,0,arguments.length),this.key()},S.prototype.name=S.prototype.name,S.prototype.key=function(){return x("Firebase.DataSnapshot.key",0,0,arguments.length),this.V.key()},S.prototype.key=S.prototype.key,S.prototype.Eb=function(){return x("Firebase.DataSnapshot.numChildren",0,0,arguments.length),this.w.Eb()},S.prototype.numChildren=S.prototype.Eb,S.prototype.mc=function(){return x("Firebase.DataSnapshot.ref",0,0,arguments.length),this.V},S.prototype.ref=S.prototype.mc,g=Qh.prototype,g.toString=function(){return(this.F.lb?"https: //":"http: //")+this.F.host},g.name=function(){return this.F.Db},g.Hb=function(t,e,n,i){this.sd++;var r=new L(t);e=this.Ee?this.Ee(t,e):e,t=[],i?n?(e=na(e,function(t){return M(t)}),t=uf(this.M,r,e,i)):(e=M(e),t=qf(this.M,r,e,i)):n?(i=na(e,function(t){return M(t)}),t=pf(this.M,r,i)):(i=M(e),t=mf(this.M,new Wb(Re,r,i))),i=r,0<t.length&&(i=Uh(this,r)),Ab(this.da,i,t)},g.Uc=function(t){Rh(this,"connected",t),!1===t&&Vh(this)},g.Pe=function(t){var e=this;Xc(t,function(t,n){Rh(e,n,t)})},g.Me=function(t){Rh(this,"authenticated",t)},g.Kb=function(t,e,n,i){this.f("set",{path:t.toString(),value:e,Yg:n});var r=Th(this);e=M(e,n);var r=rc(e,r),o=this.Hd++,r=lf(this.M,t,r,o,!0);wb(this.da,r);var a=this;this.ba.put(t.toString(),e.H(!0),function(e,n){var r="ok"===e;r||Q("setat"+t+"failed: "+e),r=of(a.M,o,!r),Ab(a.da,t,r),Wh(i,e,n)}),r=Xh(this,t),Uh(this,r),Ab(this.da,r,[])},g.update=function(t,e,n){this.f("update",{path:t.toString(),value:e});var i=!0,o=Th(this),a={};if(r(e,function(t,e){i=!1;var n=M(t);a[e]=rc(n,o)}),i)Cb("update()calledwithemptydata.Don'tdoanything."),Wh(n,"ok");else{var s=this.Hd++,c=nf(this.M,t,a,s);wb(this.da,c);var u=this;this.ba.zf(t.toString(),e,function(e,i){var r="ok"===e;r||Q("updateat"+t+"failed: "+e);var r=of(u.M,s,!r),o=t;0<r.length&&(o=Uh(u,t)),Ab(u.da,o,r),Wh(n,e,i)}),e=Xh(this,t),Uh(this,e),Ab(this.da,t,[])}},g.Jd=function(t,e){var n=this;this.ba.Jd(t.toString(),function(i,r){"ok"===i&&jg(n.la,t),Wh(e,i,r)})},g.zb=function(){this.Sa&&this.Sa.zb()},g.rc=function(){this.Sa&&this.Sa.rc()},g.Ze=function(t){if("undefined"!=typeof console){t?(this.fd||(this.fd=new Kb(this.Va)),t=this.fd.get()):t=this.Va.get();var e,n=Ra(sa(t),function(t,e){return Math.max(e.length,t)},0);for(e in t){for(var i=t[e],r=e.length;n+2>r;r++)e+="";console.log(e+i)}}},g.$e=function(t){Nb(this.Va,t),this.Qg.Nf[t]=!0},g.f=function(t){var e="";this.Sa&&(e=this.Sa.id+": "),Cb(e,arguments)},W.prototype.zb=function(){for(var t in this.oc)this.oc[t].zb()},W.prototype.rc=function(){for(var t in this.oc)this.oc[t].rc()},W.prototype.we=function(){this.Qf=!0},ca(W),W.prototype.interrupt=W.prototype.zb,W.prototype.resume=W.prototype.rc,X.prototype.cancel=function(t){x("Firebase.onDisconnect().cancel",0,1,arguments.length),A("Firebase.onDisconnect().cancel",1,t,!0),this.bd.Jd(this.ra,t||null)},X.prototype.cancel=X.prototype.cancel,X.prototype.remove=function(t){x("Firebase.onDisconnect().remove",0,1,arguments.length),bg("Firebase.onDisconnect().remove",this.ra),A("Firebase.onDisconnect().remove",1,t,!0),Yh(this.bd,this.ra,null,t)},X.prototype.remove=X.prototype.remove,X.prototype.set=function(t,e){x("Firebase.onDisconnect().set",1,2,arguments.length),bg("Firebase.onDisconnect().set",this.ra),Vf("Firebase.onDisconnect().set",t,this.ra,!1),A("Firebase.onDisconnect().set",2,e,!0),Yh(this.bd,this.ra,t,e)},X.prototype.set=X.prototype.set,X.prototype.Kb=function(t,e,n){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length),bg("Firebase.onDisconnect().setWithPriority",this.ra),Vf("Firebase.onDisconnect().setWithPriority",t,this.ra,!1),Yf("Firebase.onDisconnect().setWithPriority",2,e),A("Firebase.onDisconnect().setWithPriority",3,n,!0),Zh(this.bd,this.ra,t,e,n)},X.prototype.setWithPriority=X.prototype.Kb,X.prototype.update=function(t,e){if(x("Firebase.onDisconnect().update",1,2,arguments.length),bg("Firebase.onDisconnect().update",this.ra),ea(t)){for(var n={},i=0;i<t.length;++i)n[""+i]=t[i];t=n,Q("PassinganArraytoFirebase.onDisconnect().update()isdeprecated.Useset()ifyouwanttooverwritetheexistingdata,
	oranObjectwithintegerkeysifyoureallydowanttoonlyupdatesomeofthechildren.")}Xf("Firebase.onDisconnect().update",t,this.ra),A("Firebase.onDisconnect().update",2,e,!0),$h(this.bd,this.ra,t,e)},X.prototype.update=X.prototype.update,g=Y.prototype,g.mc=function(){return x("Query.ref",0,0,arguments.length),new U(this.k,this.path)},g.Fb=function(t,e,n,i){x("Query.on",2,4,arguments.length),Zf("Query.on",t,!1),A("Query.on",2,e,!1);var r=ni("Query.on",n,i);if("value"===t)ai(this.k,this,new id(e,r.cancel||null,r.Ma||null));else{var o={};o[t]=e,ai(this.k,this,new jd(o,r.cancel,r.Ma))}return e},g.hc=function(t,e,n){x("Query.off",0,3,arguments.length),Zf("Query.off",t,!0),A("Query.off",2,e,!0),mb("Query.off",3,n);var i=null,r=null;"value"===t?i=new id(e||null,null,n||null):t&&(e&&(r={},r[t]=e),i=new jd(r,null,n||null)),r=this.k,i=".info"===E(this.path)?r.Cd.kb(this,i):r.M.kb(this,i),yb(r.da,this.path,i)},g.Bg=function(t,e){function n(a){o&&(o=!1,r.hc(t,n),e.call(i.Ma,a))}x("Query.once",2,4,arguments.length),Zf("Query.once",t,!1),A("Query.once",2,e,!1);var i=ni("Query.once",arguments[2],arguments[3]),r=this,o=!0;this.Fb(t,n,function(e){r.hc(t,n),i.cancel&&i.cancel.call(i.Ma,e)})},g.Ie=function(t){if(Q("Query.limit()beingdeprecated.PleaseuseQuery.limitToFirst()orQuery.limitToLast()instead."),x("Query.limit",1,1,arguments.length),!ga(t)||Math.floor(t)!==t||0>=t)throw Error("Query.limit: Firstargumentmustbeapositiveinteger.");if(this.o.ja)throw Error("Query.limit: Limitwasalreadyset(byanothercalltolimit,
	limitToFirst,
	orlimitToLast.");var e=this.o.Ie(t);return li(e),new Y(this.k,this.path,e,this.kc)},g.Je=function(t){if(x("Query.limitToFirst",1,1,arguments.length),!ga(t)||Math.floor(t)!==t||0>=t)throw Error("Query.limitToFirst: Firstargumentmustbeapositiveinteger.");if(this.o.ja)throw Error("Query.limitToFirst: Limitwasalreadyset(byanothercalltolimit,
	limitToFirst,
	orlimitToLast).");return new Y(this.k,this.path,this.o.Je(t),this.kc)},g.Ke=function(t){if(x("Query.limitToLast",1,1,arguments.length),!ga(t)||Math.floor(t)!==t||0>=t)throw Error("Query.limitToLast: Firstargumentmustbeapositiveinteger.");if(this.o.ja)throw Error("Query.limitToLast: Limitwasalreadyset(byanothercalltolimit,
	limitToFirst,
	orlimitToLast).");return new Y(this.k,this.path,this.o.Ke(t),this.kc)},g.Cg=function(t){if(x("Query.orderByChild",1,1,arguments.length),"$key"===t)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===t)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===t)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');$f("Query.orderByChild",1,t,!1),mi(this,"Query.orderByChild");var e=be(this.o,new Sd(t));return ki(e),new Y(this.k,this.path,e,!0)},g.Dg=function(){x("Query.orderByKey",0,0,arguments.length),mi(this,"Query.orderByKey");var t=be(this.o,Od);return ki(t),new Y(this.k,this.path,t,!0)},g.Eg=function(){x("Query.orderByPriority",0,0,arguments.length),mi(this,"Query.orderByPriority");var t=be(this.o,N);return ki(t),new Y(this.k,this.path,t,!0)},g.Fg=function(){x("Query.orderByValue",0,0,arguments.length),mi(this,"Query.orderByValue");var t=be(this.o,Yd);return ki(t),new Y(this.k,this.path,t,!0)},g.ae=function(t,e){x("Query.startAt",0,2,arguments.length),Vf("Query.startAt",t,this.path,!0),$f("Query.startAt",2,e,!0);var i=this.o.ae(t,e);if(li(i),ki(i),this.o.ma)throw Error("Query.startAt: Startingpointwasalreadyset(byanothercalltostartAtorequalTo).");return n(t)||(e=t=null),new Y(this.k,this.path,i,this.kc)},g.td=function(t,e){x("Query.endAt",0,2,arguments.length),Vf("Query.endAt",t,this.path,!0),$f("Query.endAt",2,e,!0);var n=this.o.td(t,e);if(li(n),ki(n),this.o.pa)throw Error("Query.endAt: Endingpointwasalreadyset(byanothercalltoendAtorequalTo).");return new Y(this.k,this.path,n,this.kc)},g.ig=function(t,e){if(x("Query.equalTo",1,2,arguments.length),Vf("Query.equalTo",t,this.path,!1),$f("Query.equalTo",2,e,!0),this.o.ma)throw Error("Query.equalTo: Startingpointwasalreadyset(byanothercalltoendAtorequalTo).");if(this.o.pa)throw Error("Query.equalTo: Endingpointwasalreadyset(byanothercalltoendAtorequalTo).");return this.ae(t,e).td(t,e)},g.toString=function(){x("Query.toString",0,0,arguments.length);for(var t=this.path,e="",n=t.Z;n<t.n.length;n++)""!==t.n[n]&&(e+="/"+encodeURIComponent(String(t.n[n])));return this.k.toString()+(e||"/")},g.va=function(){var t=Vc(ce(this.o));return"{
		
	}"===t?"default":t},Y.prototype.ref=Y.prototype.mc,Y.prototype.on=Y.prototype.Fb,Y.prototype.off=Y.prototype.hc,Y.prototype.once=Y.prototype.Bg,Y.prototype.limit=Y.prototype.Ie,Y.prototype.limitToFirst=Y.prototype.Je,Y.prototype.limitToLast=Y.prototype.Ke,Y.prototype.orderByChild=Y.prototype.Cg,Y.prototype.orderByKey=Y.prototype.Dg,Y.prototype.orderByPriority=Y.prototype.Eg,Y.prototype.orderByValue=Y.prototype.Fg,Y.prototype.startAt=Y.prototype.ae,Y.prototype.endAt=Y.prototype.td,Y.prototype.equalTo=Y.prototype.ig,Y.prototype.toString=Y.prototype.toString;var Z={};Z.vc=Ch,Z.DataConnection=Z.vc,Ch.prototype.Pg=function(t,e){this.Fa("q",{p:t},e)},Z.vc.prototype.simpleListen=Z.vc.prototype.Pg,Ch.prototype.hg=function(t,e){this.Fa("echo",{d:t},e)},Z.vc.prototype.echo=Z.vc.prototype.hg,Ch.prototype.interrupt=Ch.prototype.zb,Z.Tf=qh,Z.RealTimeConnection=Z.Tf,qh.prototype.sendRequest=qh.prototype.Fa,qh.prototype.close=qh.prototype.close,Z.pg=function(t){var e=Ch.prototype.put;return Ch.prototype.put=function(i,r,o,a){n(a)&&(a=t()),e.call(this,i,r,o,a)},function(){Ch.prototype.put=e}},Z.hijackHash=Z.pg,Z.Sf=Dc,Z.ConnectionTarget=Z.Sf,Z.va=function(t){return t.va()},Z.queryIdentifier=Z.va,Z.rg=function(t){return t.k.Sa.$},Z.listens=Z.rg,Z.we=function(t){t.we()},Z.forceRestClient=Z.we,ma(U,Y);var oi=U,pi=["Firebase"],qi=aa;pi[0]in qi||!qi.execScript||qi.execScript("var"+pi[0]);for(var ri;pi.length&&(ri=pi.shift());)!pi.length&&n(oi)?qi[ri]=oi:qi=qi[ri]?qi[ri]:qi[ri]={};U.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length),W.vb().zb()},U.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length),W.vb().rc()},U.enableLogging=Mc,U.ServerValue={TIMESTAMP:{".sv":"timestamp"}},U.SDK_VERSION=hb,U.INTERNAL=V,U.Context=W,U.TEST_ACCESS=Z,U.prototype.name=function(){return Q("Firebase.name()beingdeprecated.PleaseuseFirebase.key()instead."),x("Firebase.name",0,0,arguments.length),this.key()},U.prototype.name=U.prototype.name,U.prototype.key=function(){return x("Firebase.key",0,0,arguments.length),this.path.e()?null:uc(this.path)},U.prototype.key=U.prototype.key,U.prototype.u=function(t){if(x("Firebase.child",1,1,arguments.length),ga(t))t=String(t);else if(!(t instanceof L))if(null===E(this.path)){var e=t;e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ag("Firebase.child",e)}else ag("Firebase.child",t);return new U(this.k,this.path.u(t))},U.prototype.child=U.prototype.u,U.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var t=this.path.parent();return null===t?null:new U(this.k,t)},U.prototype.parent=U.prototype.parent,U.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var t=this;null!==t.parent();)t=t.parent();return t},U.prototype.root=U.prototype.root,U.prototype.set=function(t,e){x("Firebase.set",1,2,arguments.length),bg("Firebase.set",this.path),Vf("Firebase.set",t,this.path,!1),A("Firebase.set",2,e,!0),this.k.Kb(this.path,t,null,e||null)},U.prototype.set=U.prototype.set,U.prototype.update=function(t,e){if(x("Firebase.update",1,2,arguments.length),bg("Firebase.update",this.path),ea(t)){for(var n={},i=0;i<t.length;++i)n[""+i]=t[i];t=n,Q("PassinganArraytoFirebase.update()isdeprecated.Useset()ifyouwanttooverwritetheexistingdata,
	oranObjectwithintegerkeysifyoureallydowanttoonlyupdatesomeofthechildren.")}Xf("Firebase.update",t,this.path),A("Firebase.update",2,e,!0),this.k.update(this.path,t,e||null)},U.prototype.update=U.prototype.update,U.prototype.Kb=function(t,e,n){if(x("Firebase.setWithPriority",2,3,arguments.length),bg("Firebase.setWithPriority",this.path),Vf("Firebase.setWithPriority",t,this.path,!1),Yf("Firebase.setWithPriority",2,e),A("Firebase.setWithPriority",3,n,!0),".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriorityfailed: "+this.key()+"isaread-onlyobject.";this.k.Kb(this.path,t,e,n||null)},U.prototype.setWithPriority=U.prototype.Kb,U.prototype.remove=function(t){x("Firebase.remove",0,1,arguments.length),bg("Firebase.remove",this.path),A("Firebase.remove",1,t,!0),this.set(null,t)},U.prototype.remove=U.prototype.remove,U.prototype.transaction=function(t,e,i){if(x("Firebase.transaction",1,3,arguments.length),bg("Firebase.transaction",this.path),A("Firebase.transaction",1,t,!1),A("Firebase.transaction",2,e,!0),n(i)&&"boolean"!=typeof i)throw Error(z("Firebase.transaction",3,!0)+"mustbeaboolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transactionfailed: "+this.key()+"isaread-onlyobject.";"undefined"==typeof i&&(i=!0),bi(this.k,this.path,t,e||null,i)},U.prototype.transaction=U.prototype.transaction,U.prototype.Mg=function(t,e){x("Firebase.setPriority",1,2,arguments.length),bg("Firebase.setPriority",this.path),Yf("Firebase.setPriority",1,t),A("Firebase.setPriority",2,e,!0),this.k.Kb(this.path.u(".priority"),t,null,e)},U.prototype.setPriority=U.prototype.Mg,U.prototype.push=function(t,e){x("Firebase.push",0,2,arguments.length),bg("Firebase.push",this.path),Vf("Firebase.push",t,this.path,!0),A("Firebase.push",2,e,!0);var n=Sh(this.k),n=Nf(n),n=this.u(n);return"undefined"!=typeof t&&null!==t&&n.set(t,e),n},U.prototype.push=U.prototype.push,U.prototype.ib=function(){return bg("Firebase.onDisconnect",this.path),
new X(this.k,this.path)},U.prototype.onDisconnect=U.prototype.ib,U.prototype.N=function(t,e,n){Q("FirebaseRef.auth()beingdeprecated.PleaseuseFirebaseRef.authWithCustomToken()instead."),x("Firebase.auth",1,3,arguments.length),cg("Firebase.auth",t),A("Firebase.auth",2,e,!0),A("Firebase.auth",3,e,!0),Qg(this.k.N,t,{},{remember:"none"},e,n)},U.prototype.auth=U.prototype.N,U.prototype.he=function(t){x("Firebase.unauth",0,1,arguments.length),A("Firebase.unauth",1,t,!0),Rg(this.k.N,t)},U.prototype.unauth=U.prototype.he,U.prototype.ye=function(){return x("Firebase.getAuth",0,0,arguments.length),this.k.N.ye()},U.prototype.getAuth=U.prototype.ye,U.prototype.vg=function(t,e){x("Firebase.onAuth",1,2,arguments.length),A("Firebase.onAuth",1,t,!1),mb("Firebase.onAuth",2,e),this.k.N.Fb("auth_status",t,e)},U.prototype.onAuth=U.prototype.vg,U.prototype.ug=function(t,e){x("Firebase.offAuth",1,2,arguments.length),A("Firebase.offAuth",1,t,!1),mb("Firebase.offAuth",2,e),this.k.N.hc("auth_status",t,e)},U.prototype.offAuth=U.prototype.ug,U.prototype.Xf=function(t,e,n){x("Firebase.authWithCustomToken",2,3,arguments.length),cg("Firebase.authWithCustomToken",t),A("Firebase.authWithCustomToken",2,e,!1),fg("Firebase.authWithCustomToken",3,n,!0),Qg(this.k.N,t,{},n||{},e)},U.prototype.authWithCustomToken=U.prototype.Xf,U.prototype.Yf=function(t,e,n){x("Firebase.authWithOAuthPopup",2,3,arguments.length),eg("Firebase.authWithOAuthPopup",t),A("Firebase.authWithOAuthPopup",2,e,!1),fg("Firebase.authWithOAuthPopup",3,n,!0),Vg(this.k.N,t,n,e)},U.prototype.authWithOAuthPopup=U.prototype.Yf,U.prototype.Zf=function(t,e,n){x("Firebase.authWithOAuthRedirect",2,3,arguments.length),eg("Firebase.authWithOAuthRedirect",t),A("Firebase.authWithOAuthRedirect",2,e,!1),fg("Firebase.authWithOAuthRedirect",3,n,!0);var i=this.k.N;Tg(i);var r=[Cg],o=ng(n);"anonymous"===t||"firebase"===t?R(e,Eg("TRANSPORT_UNAVAILABLE")):(P.set("redirect_client_options",o.od),Ug(i,r,"/auth/"+t,o,e))},U.prototype.authWithOAuthRedirect=U.prototype.Zf,U.prototype.$f=function(t,e,n,i){x("Firebase.authWithOAuthToken",3,4,arguments.length),eg("Firebase.authWithOAuthToken",t),A("Firebase.authWithOAuthToken",3,n,!1),fg("Firebase.authWithOAuthToken",4,i,!0),p(e)?(dg("Firebase.authWithOAuthToken",2,e),Sg(this.k.N,t+"/token",{access_token:e},i,n)):(fg("Firebase.authWithOAuthToken",2,e,!1),Sg(this.k.N,t+"/token",e,i,n))},U.prototype.authWithOAuthToken=U.prototype.$f,U.prototype.Wf=function(t,e){x("Firebase.authAnonymously",1,2,arguments.length),A("Firebase.authAnonymously",1,t,!1),fg("Firebase.authAnonymously",2,e,!0),Sg(this.k.N,"anonymous",{},e,t)},U.prototype.authAnonymously=U.prototype.Wf,U.prototype.ag=function(t,e,n){x("Firebase.authWithPassword",2,3,arguments.length),fg("Firebase.authWithPassword",1,t,!1),gg("Firebase.authWithPassword",t,"email"),gg("Firebase.authWithPassword",t,"password"),A("Firebase.authWithPassword",2,e,!1),fg("Firebase.authWithPassword",3,n,!0),Sg(this.k.N,"password",t,n,e)},U.prototype.authWithPassword=U.prototype.ag,U.prototype.te=function(t,e){x("Firebase.createUser",2,2,arguments.length),fg("Firebase.createUser",1,t,!1),gg("Firebase.createUser",t,"email"),gg("Firebase.createUser",t,"password"),A("Firebase.createUser",2,e,!1),this.k.N.te(t,e)},U.prototype.createUser=U.prototype.te,U.prototype.Ue=function(t,e){x("Firebase.removeUser",2,2,arguments.length),fg("Firebase.removeUser",1,t,!1),gg("Firebase.removeUser",t,"email"),gg("Firebase.removeUser",t,"password"),A("Firebase.removeUser",2,e,!1),this.k.N.Ue(t,e)},U.prototype.removeUser=U.prototype.Ue,U.prototype.qe=function(t,e){x("Firebase.changePassword",2,2,arguments.length),fg("Firebase.changePassword",1,t,!1),gg("Firebase.changePassword",t,"email"),gg("Firebase.changePassword",t,"oldPassword"),gg("Firebase.changePassword",t,"newPassword"),A("Firebase.changePassword",2,e,!1),this.k.N.qe(t,e)},U.prototype.changePassword=U.prototype.qe,U.prototype.pe=function(t,e){x("Firebase.changeEmail",2,2,arguments.length),fg("Firebase.changeEmail",1,t,!1),gg("Firebase.changeEmail",t,"oldEmail"),gg("Firebase.changeEmail",t,"newEmail"),gg("Firebase.changeEmail",t,"password"),A("Firebase.changeEmail",2,e,!1),this.k.N.pe(t,e)},U.prototype.changeEmail=U.prototype.pe,U.prototype.We=function(t,e){x("Firebase.resetPassword",2,2,arguments.length),fg("Firebase.resetPassword",1,t,!1),gg("Firebase.resetPassword",t,"email"),A("Firebase.resetPassword",2,e,!1),this.k.N.We(t,e)},U.prototype.resetPassword=U.prototype.We}(),!function(t,e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e[t]=n()}("Please",this,function(){"usestrict";function t(){function t(t,e,n){var i=Math.random;return n instanceof a&&(i=n.random),Math.floor(i()*(e-t+1))+t}function e(t,e,n){var i=Math.random;return n instanceof a&&(i=n.random),i()*(e-t)+t}function n(t,e,n){return Math.max(e,Math.min(t,n))}function i(t,e){var n;switch(t){case"hex":for(n=0;n<e.length;n++)e[n]=s.HSV_to_HEX(e[n]);break;case"rgb":for(n=0;n<e.length;n++)e[n]=s.HSV_to_RGB(e[n]);break;case"rgb-string":for(n=0;n<e.length;n++){var i=s.HSV_to_RGB(e[n]);e[n]="rgb("+i.r+",
	"+i.g+",
	"+i.b+")"}break;case"hsv":break;default:console.error("Formatnotrecognized.")}return e}function r(t){var e=s.HSV_to_RGB(t),n=(299*e.r+587*e.g+114*e.b)/1e3;return n>=128?"dark":"light"}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function a(t){function e(){i=(i+1)%256,r=(r+n[i])%256;var t=n[i];return n[i]=n[r],n[r]=t,n[(n[i]+n[r])%256]}for(var n=[],i=0,r=0,o=0;256>o;o++)n[o]=o;for(var a=0,s=0;256>a;a++){s=(s+n[a]+t.charCodeAt(a%t.length))%256;var c=n[a];n[a]=n[s],n[s]=c}this.random=function(){for(var t=0,n=0,i=1;8>t;t++)n+=e()*i,i*=256;return n/0x10000000000000000}}var s={},c={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgrey:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",grey:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgrey:"D3D3D3",lightgreen:"90EE90",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",rebeccapurple:"663399",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"},u=.618033988749895,h={hue:null,saturation:null,value:null,base_color:"",greyscale:!1,grayscale:!1,golden:!0,full_random:!1,colors_returned:1,format:"hex",seed:null},l={scheme_type:"analogous",format:"hex"},f={golden:!1,format:"hex"};return s.NAME_to_HEX=function(t){return t=t.toLowerCase(),t in c?c[t]:void console.error("Colornamenotrecognized.")},s.NAME_to_RGB=function(t){return s.HEX_to_RGB(s.NAME_to_HEX(t))},s.NAME_to_HSV=function(t){return s.HEX_to_HSV(s.NAME_to_HEX(t))},s.HEX_to_RGB=function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,n,i){return e+e+n+n+i+i});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},s.RGB_to_HEX=function(t){return"#"+((1<<24)+(t.r<<16)+(t.g<<8)+t.b).toString(16).slice(1)},s.HSV_to_RGB=function(t){var e,n,i,r,o,a,s,c,u=t.h,h=t.s,l=t.v;if(0===h)return{r:l,g:l,b:l};switch(u/=60,r=Math.floor(u),o=u-r,a=l*(1-h),s=l*(1-h*o),c=l*(1-h*(1-o)),r){case 0:e=l,n=c,i=a;break;case 1:e=s,n=l,i=a;break;case 2:e=a,n=l,i=c;break;case 3:e=a,n=s,i=l;break;case 4:e=c,n=a,i=l;break;case 5:e=l,n=a,i=s}return{r:Math.floor(255*e),g:Math.floor(255*n),b:Math.floor(255*i)}},s.RGB_to_HSV=function(t){var e=t.r/255,n=t.g/255,i=t.b/255,r=0,o=0,a=0,s=Math.min(e,Math.min(n,i)),c=Math.max(e,Math.max(n,i));if(s===c)return a=s,{h:0,s:0,v:a};var u=e===s?n-i:i===s?e-n:i-e,h=e===s?3:i===s?1:5;return r=60*(h-u/(c-s)),o=(c-s)/c,a=c,{h:r,s:o,v:a}},s.HSV_to_HEX=function(t){return s.RGB_to_HEX(s.HSV_to_RGB(t))},s.HEX_to_HSV=function(t){return s.RGB_to_HSV(s.HEX_to_RGB(t))},s.make_scheme=function(t,e){function r(t){return{h:t.h,s:t.s,v:t.v}}var a,s,c,u,h,f=o(l);if(null!==e)for(var d in e)e.hasOwnProperty(d)&&(f[d]=e[d]);var p=[t];switch(f.scheme_type.toLowerCase()){case"monochromatic":case"mono":for(h=1;2>=h;h++)a=r(t),c=a.s+.1*h,c=n(c,0,1),u=a.v+.1*h,u=n(u,0,1),a.s=c,a.v=u,p.push(a);for(h=1;2>=h;h++)a=r(t),c=a.s-.1*h,c=n(c,0,1),u=a.v-.1*h,u=n(u,0,1),a.s=c,a.v=u,p.push(a);break;case"complementary":case"complement":case"comp":a=r(t),a.h=(a.h+180)%360,p.push(a);break;case"split-complementary":case"split-complement":case"split":a=r(t),a.h=(a.h+165)%360,p.push(a),a=r(t),a.h=Math.abs((a.h-165)%360),p.push(a);break;case"double-complementary":case"double-complement":case"double":a=r(t),a.h=(a.h+180)%360,p.push(a),a.h=(a.h+30)%360,s=r(a),p.push(a),a.h=(a.h+180)%360,p.push(s);break;case"analogous":case"ana":for(h=1;5>=h;h++)a=r(t),a.h=(a.h+20*h)%360,p.push(a);break;case"triadic":case"triad":case"tri":for(h=1;3>h;h++)a=r(t),a.h=(a.h+120*h)%360,p.push(a);break;default:console.error("Colorschemenotrecognized.")}return i(f.format.toLowerCase(),p),p},s.make_color=function(r){var c=[],l=o(h),f=null;if(null!==r)for(var d in r)r.hasOwnProperty(d)&&(l[d]=r[d]);var p=null;"string"==typeof l.seed&&(p=new a(l.seed)),l.base_color.length>0&&(f=l.base_color.match(/^#?([0-9a-f]{3})([0-9a-f]{3})?$/i)?s.HEX_to_HSV(l.base_color):s.NAME_to_HSV(l.base_color));for(var g=0;g<l.colors_returned;g++){var b,y,v,m=t(0,360,p);null!==f?(b=n(t(f.h-5,f.h+5,p),0,360),y=0===f.s?0:e(.4,.85,p),v=e(.4,.85,p),c.push({h:b,s:y,v:v})):(b=l.greyscale===!0||l.grayscale===!0?0:l.golden===!0?(m+m/u)%360:null===l.hue||l.full_random===!0?m:n(l.hue,0,360),y=l.greyscale===!0||l.grayscale===!0?0:l.full_random===!0?e(0,1,p):null===l.saturation?.4:n(l.saturation,0,1),v=l.full_random===!0?e(0,1,p):l.greyscale===!0||l.grayscale===!0?e(.15,.75,p):null===l.value?.75:n(l.value,0,1),c.push({h:b,s:y,v:v}))}return i(l.format.toLowerCase(),c),c},s.make_contrast=function(t,e){var a=o(f);if(null!==e)for(var c in e)e.hasOwnProperty(c)&&(a[c]=e[c]);var h,l,d=r(t);if(a.golden===!0)l=t.h*(1+u)%360;else{var p=s.make_scheme(t,{scheme_type:"complementary",format:"hsv"})[1];l=n(p.h-30,0,360)}var g;return"dark"===d?g=n(t.v-.25,0,1):"light"===d&&(g=n(t.v+.25,0,1)),h=[{h:l,s:t.s,v:g}],i(a.format.toLowerCase(),h),h[0]},s}return t()});var Url=function(){"usestrict";var t={protocol:"protocol",host:"hostname",port:"port",path:"pathname",query:"search",hash:"hash"},e={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443},n=function(n,i){var o=document,a=o.createElement("a"),i=i||o.location.href,s=i.match(/\/\/(.*?)(?::(.*?))?@/)||[];a.href=i;for(var c in t)n[c]=a[t[c]]||"";if(n.protocol=n.protocol.replace(/:$/,""),n.query=n.query.replace(/^\?/,""),n.hash=n.hash.replace(/^#/,""),n.user=s[1]||"",n.pass=s[2]||"",n.port=e[n.protocol]==n.port||0==n.port?"":n.port,n.protocol||/^([a-z]+:)?\/\//.test(i))n.path=n.path.replace(/^\/?/,"/");else{var u=new Url(o.location.href.match(/(.*\/)/)[0]),h=u.path.split("/"),l=n.path.split("/");h.pop();for(var c=0,f=["protocol","user","pass","host","port"],d=f.length;d>c;c++)n[f[c]]=u[f[c]];for(;".."==l[0];)h.pop(),l.shift();n.path=("/"!=i.substring(0,1)?h.join("/"):"")+"/"+l.join("/")}r(n)},i=function(t){return t=t.replace(/\+/g,""),t=t.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,function(t,e,n,i){var r=parseInt(e,16)-224,o=parseInt(n,16)-128;if(0==r&&32>o)return t;var a=parseInt(i,16)-128,s=(r<<12)+(o<<6)+a;return s>65535?t:String.fromCharCode(s)}),t=t.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,function(t,e,n){var i=parseInt(e,16)-192;if(2>i)return t;var r=parseInt(n,16)-128;return String.fromCharCode((i<<6)+r)}),t=t.replace(/%([0-7][0-9a-f])/gi,function(t,e){return String.fromCharCode(parseInt(e,16))})},r=function(t){var e=t.query;t.query=new function(t){for(var e,n=/([^=&]+)(=([^&]*))?/g;e=n.exec(t);){var r=decodeURIComponent(e[1].replace(/\+/g,"")),o=e[3]?i(e[3]):"";null!=this[r]?(this[r]instanceof Array||(this[r]=[this[r]]),this[r].push(o)):this[r]=o}this.clear=function(){for(r in this)this[r]instanceof Function||delete this[r]},this.toString=function(){var t="",e=encodeURIComponent;for(var n in this)if(!(this[n]instanceof Function))if(this[n]instanceof Array){var i=this[n].length;if(i)for(var r=0;i>r;r++)t+=t?"&":"",t+=e(n)+"="+e(this[n][r]);else t+=(t?"&":"")+e(n)+"="}else t+=t?"&":"",t+=e(n)+"="+e(this[n]);return t}}(e)};return function(t){this.toString=function(){return(this.protocol&&this.protocol+": //")+(this.user&&this.user+(this.pass&&": "+this.pass)+"@")+(this.host&&this.host)+(this.port&&": "+this.port)+(this.path&&this.path)+(this.query.toString()&&"?"+this.query)+(this.hash&&"#"+this.hash)},n(this,t)}}();!function(t,e,n){"usestrict";function i(t){var e={};return e=t.__proto__?Object.assign(i(t.__proto__),t):Object.assign({schema:{},dependencies:[]},t),t.schema&&Object.assign(e.schema,t.schema),t.dependencies&&(n=e.dependencies).push.apply(n,t.dependencies),e;var n}function r(t,e){AFRAME.registerComponent(t,i(new e))}function o(t,e){AFRAME.registerSystem(t,i(new e))}function a(t,e,n){return 0===e.length?n:(t[e[0]]=a(t[e[0]]||{},e.slice(1),n),t)}function s(t,e,n){var i,r,o,a,s=0;n||(n={});var c=function(){s=n.leading===!1?0:Date.now(),i=null,a=t.apply(r,o),i||(r=o=null)},u=function(){var u=Date.now();s||n.leading!==!1||(s=u);var h=e-(u-s);return r=this,o=arguments,0>=h||h>e?(i&&(clearTimeout(i),i=null),s=u,a=t.apply(r,o),i||(r=o=null)):i||n.trailing===!1||(i=setTimeout(c,h)),a};return u.cancel=function(){clearTimeout(i),s=0,i=r=o=null},u}function c(t){return t?encodeURIComponent(t).replace(/\./g,"%2E").replace(/%[A-Z0-9]{2}/g,"-"):null}function u(){var t=document.querySelector("link[rel=canonical]");return t?t.href:window.location.href}function h(t,e,n){return c(e||n)+": "+c(t||"")}function l(n){n=n||{};var i=new e,r=n.baseRefUrl||"https: //altspace-apps.firebaseio.com/apps/examples/",o=new t(r),a=n.instanceId||i.query["altspace-sync-instance"],s=n.spaceId||i.query["altspace-sync-space"],u=n.userId||i.query["altspace-sync-user"];if(!n.appId||!n.authorId)throw new Error("BoththeappIdandauthorIdmustbeprovidedtoconnect.");var l=[];wt&&(s||l.unshift(altspace.getSpace()),u||l.unshift(altspace.getUser()));var f={},d=h(n.appId,n.authorId,Et);f.app=o.child(d).child("app");var p=f.app.child("instances");return a?(f.instance=p.child(a),Promise.all(l).then(function(t){wt&&(s||(s=t.pop().sid),u||(u=t.pop().userId)),s=c(s),u=c(u),a=c(a),f.space=s?f.app.child("spaces").child(s):null,f.user=u?f.app.child("users").child(u):null;var e=f;return e})):(f.instance=p.push(),a=f.instance.key(),i.query["altspace-sync-instance"]=a,window.location.href=i.toString(),Promise.reject(new Error("Syncinstanceidnotfound.Reloadingappwithnewsyncid.")))}function f(t,e,n){if(!(t&&t instanceof THREE.Scene))throw new TypeError("RequiresTHREE.Sceneargument");if(!(e&&e instanceof THREE.Camera))throw new TypeError("RequiresTHREE.Cameraargument");gt=t,bt=e,p=n||{},yt=p.renderer&&p.renderer.domElement||window,yt.addEventListener("mousedown",d,!1),yt.addEventListener("mouseup",g,!1),yt.addEventListener("mousemove",b,!1)}function d(t){var e=v(t);if(e&&e.point){var n=y("cursordown",e);e.object.dispatchEvent(n)}}function g(t){var e=v(t),n=y("cursorup",e);e?e.object.dispatchEvent(n):gt.dispatchEvent(n)}function b(t){var e=v(t),n=y("cursormove",e);gt.dispatchEvent(n);var i=e?e.object:null;vt!=i&&(vt&&(n=y("cursorleave",e),vt.dispatchEvent(n)),i&&(n=y("cursorenter",e),i.dispatchEvent(n)),vt=i)}function y(t,e){return{type:t,bubbles:!0,target:e?e.object:null,ray:{origin:jt.ray.origin.clone(),direction:jt.ray.direction.clone()},point:e?e.point.clone():null}}function v(t){var e=new THREE.Vector2;e.x=t.offsetX/(yt.width||yt.innerWidth)*2-1,e.y=2*-(t.offsetY/(yt.height||yt.innerHeight))+1,jt.setFromCamera(e,bt);var n=jt.intersectObjects(gt.children,!0);return n.find(function(t){return!t.object.userData||!t.object.userData.altspace||!t.object.userData.altspace.collider||t.object.userData.altspace.collider.enabled!==!1})||null}function m(t){var e=t||{};At=e.TRACE||!1,e.crossOrigin&&(Tt=e.crossOrigin),e.baseUrl&&(kt=e.baseUrl),"/"!==kt.slice(-1)&&(kt+="/"),Ot=new altspace.utilities.shims.OBJMTLLoader,Ot.crossOrigin=Tt,At&&console.log("MultiLoaderinitializedwithparams",t)}function w(t,e){var n=t,i=Date.now();if(!(n&&n instanceof Rt))throw new Error("MultiLoader.loadexpectsfirstargoftypeLoadRequest");if(!e||"function"!=typeof e)throw new Error("MultiLoader.loadexpectssecondargoftypefunction");if(!n.objUrls||!n.mtlUrls||n.objUrls.length!==n.mtlUrls.length)throw new Error("MultiLoader.loadcalledwithbadLoadRequest");var r=n.objUrls.length;At&&console.log("Loadingmodels...");for(var o=0;r>o;o++){var a=function(t,n){var o=kt+t.objUrls[n],a=kt+t.mtlUrls[n];At&&console.log("Loadingobj: "+o+",
	mtl: "+a),Ot.load(o,a,function(o){if(t.objects[n]=o,t.objectsLoaded++,t.objectsLoaded===r){var a=((Date.now()-i)/1e3).toFixed(2);At&&console.log("Loaded"+r+"modelsin"+a+"seconds"),e()}},E,function(){var e=xhr.target.responseURL||"";t.error="Errorloadingfile"+e})};a(n,o)}}function E(t){if(t.lengthComputable&&t.target.responseURL){var e=t.loaded/t.total*100,n=t.target.responseURL.split("/").pop();At&&console.log("..."+n+""+Math.round(e,2)+"%downloaded")}}function _(){console.log("Inatile: "+It),console.log("InVR: "+Mt)}function j(){if(!It&&Mt);else{var t=document.createElement("style");t.type="text/css",t.innerHTML="@importurl(https: //fonts.googleapis.com/css?family=Open+Sans: 800);.altspace-info{
		text-align: center;font-family: 'OpenSans',
		sans-serif;line-height: .5
	}.altspace-vr-notice{
		color: rgba(0,
		0,
		0,
		.7);font-size: 5vw
	}.altspace-pen-name{
		font-size: 7vw
	}",document.head.appendChild(t),document.body.style.background=n.make_color({seed:C()});var e=document.createElement("div");e.className="altspace-info",document.body.appendChild(e);var i=document.createElement("span");if(i.className="altspace-pen-name",i.innerHTML="<p>"+Lt.toUpperCase()+"</p>",e.appendChild(i),It){var r="VRmodedoesnotsupportpreviewtiles.Stoppingcodeexecution.";throw console.log("ERROR: "+r),new Error(r)}if(!Mt){var o=document.createElement("span");o.className="altspace-vr-notice",o.innerHTML="<p>View</p>",e.insertBefore(o,i);var a=document.createElement("span");a.className="altspace-vr-notice",a.innerHTML='<p>in <a href="http: //altvr.com"> AltspaceVR </a></p>',e.appendChild(a);var r="NotinVRmode.Stoppingcodeexecution.";throw It&&console.log("ERROR: "+r),new Error(r)}}}function S(t){Lt=t}function F(){var t=document.querySelector("link[rel=canonical]"),n=t?t.href:window.location.href;return new e(n)}function C(){var t=F(),e=t.path.split("/"),n=e[e.length-1];return n}function O(){var t=F(),e=t.path.split("/"),n="team"==e[1],i=n?"team-"+e[2]:e[1];return i}function A(t){var e,n,i=this;if(t.bubbles&&(t.currentTarget=this,t.stopPropagation=function(){e=!0},t.stopImmediatePropagation=function(){n=!0}),this._listeners){var r=this._listeners,o=r[t.type];if(o){t.target=t.target||this;for(var a=[],s=o.length,c=0;s>c;c++)a[c]=o[c];for(var c=0;s>c;c++)if(a[c].call(i,t),n)return}}t.bubbles&&this.parent&&this.parent.dispatchEvent&&!e&&A.call(this.parent,t)}function k(t){t.updateMatrixWorld();var e=new THREE.Vector3;return e.setFromMatrixPosition(t.matrixWorld),e}function T(t){return new Promise(function(e,n){var i=null;return t.traverse(function(t){return"TrackingSkeleton"===t.type?void(i=t):void 0}),i?e(i):void altspace.getThreeJSTrackingSkeleton().then(function(n){return i=n,t.add(i),e(i)})})}function R(t,e){if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e)&&t.length===e.length)return t.every(function(n,i){return R(t[i],e[i])});if(t instanceof Object&&e instanceof Object&&R(Object.keys(t).sort(),Object.keys(e).sort())){for(var n in t)if(!R(t[n],e[n]))return!1;return!0}return!1}function x(){le.forEach(function(t){return t.autoSend()})}function L(t,e){var n=function(i,r){var o=altspace.getGamepads().find(function(e){return"steamvr"===e.mapping&&e.hand===t});o?(e.logging&&console.log("SteamVRinputdevicefound",o),i(o)):(e.logging&&console.log("SteamVRinputdevicenotfoundtryingagainin500ms..."),setTimeout(n,500,i,r))};return new Promise(n)}t="default"in t?t["default"]:t,e="default"in e?e["default"]:e,n="default"in n?n["default"]:n;var I=function(){},M={schema:{}};M.schema.get=function(){return null},I.prototype.init=function(){},I.prototype.tick=function(t,e){},I.prototype.pause=function(){},I.prototype.play=function(){},Object.defineProperties(I.prototype,M);var D=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.update=function(t){},e.prototype.remove=function(){},e.prototype.updateSchema=function(t){},e}(I),P=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{enabled:{type:"boolean","default":"true"}}},e.prototype.init=function(){var t=this;this.setColliderFlag(this.data.enabled),this.el.addEventListener("model-loaded",function(){t.setColliderFlag(t.data.enabled)}.bind(this))},e.prototype.update=function(){this.setColliderFlag(this.data.enabled)},e.prototype.setColliderFlag=function(t){var e=this.el.object3D;e&&(a(e.userData,["altspace","collider","enabled"],t),e.traverse(function(e){e instanceof THREE.Mesh&&a(e.userData,["altspace","collider","enabled"],t)}))},Object.defineProperties(e.prototype,n),e}(D),U=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.init=function(){this.gamepadIndex=null,this.trackedControlsSystem=document.querySelector("a-scene").systems["tracked-controls"],this.systemGamepads=0,altspace.getGamepads()},e.prototype.tick=function(){if(this.trackedControlsSystem&&this.systemGamepads!==this.trackedControlsSystem.controllers.length&&window.altspace&&altspace.getGamepads&&altspace.getGamepads().length){var t=this.el.components;t["paint-controls"]&&(this.gamepadIndex="left"===t["paint-controls"].data.hand?2:1),null===this.gamepadIndex&&t["hand-controls"]&&(this.gamepadIndex="left"===t["hand-controls"].data?2:1),null===this.gamepadIndex&&t["vive-controls"]&&(this.gamepadIndex="left"===t["vive-controls"].data.hand?2:1),null===this.gamepadIndex&&t["tracked-controls"]&&(this.gamepadIndex=t["tracked-controls"].data.controller),this.el.setAttribute("tracked-controls","id",altspace.getGamepads()[this.gamepadIndex].id),this.el.setAttribute("tracked-controls","controller",0),this.systemGamepads=this.trackedControlsSystem.controllers.length}},e}(D),N=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{usePixelScale:{type:"boolean","default":"false"},verticalAlign:{type:"string","default":"middle"},enclosuresOnly:{type:"boolean","default":"true"},fullspace:{type:"boolean","default":"false"}}},e.prototype.init=function(){return this.version="AFRAME_ALTSPACE_VERSION",this.el.object3D instanceof THREE.Scene?void(window.altspace&&window.altspace.inClient?(this.el.setAttribute("vr-mode-ui",{enabled:!1}),this.initRenderer(),this.initCursorEvents(),this.initCollisionEvents()):console.warn("aframe-altspace-componentonlyworksinsideofAltspaceVR")):void console.warn("aframe-altspace-componentcanonlybeattachedtoa-scene")},e.prototype.tick=function(t,e){this.el.object3D.updateAllBehaviors&&this.el.object3D.updateAllBehaviors()},e.prototype.initRenderer=function(){var t=this,e=this.el.object3D,n=this.el.sceneEl,i=n.getAttribute("scale")||{x:1,y:1,z:1};altspace.getEnclosure().then(function(n){switch(t.data.fullspace&&(n.fullspace&&a(e.userData,["altspace","initialized"],!0),n.requestFullspace(),n.addEventListener("fullspacechange",function(){e.scale.copy(i).multiplyScalar(n.pixelsPerMeter),a(e.userData,["altspace","initialized"],!0)})),(!t.data.usePixelScale||t.data.fullspace)&&e.scale.copy(i).multiplyScalar(n.pixelsPerMeter),t.data.verticalAlign){case"bottom":e.position.y-=n.innerHeight/2;break;case"top":e.position.y+=n.innerHeight/2;break;case"middle":break;default:console.warn("UnexpectedvalueforverticalAlign: ",t.data.verticalAlign)}t.data.enclosuresOnly&&1===n.innerDepth&&(t.el.renderer.render(new THREE.Scene),t.el.renderer=t.el.effect=r),t.data.fullspace||a(e.userData,["altspace","initialized"],!0)}.bind(this));var r=this.el.renderer,o=this.el.renderer=this.el.effect=altspace.getThreeJSRenderer({aframeComponentVersion:this.version}),s=function(){};o.setSize=s,o.setPixelRatio=s,o.setClearColor=s,o.clear=s,o.enableScissorTest=s,o.setScissor=s,o.setViewport=s,o.getPixelRatio=s,o.getMaxAnisotropy=s,o.setFaceCulling=s,o.context={canvas:{}},o.shadowMap={}},e.prototype.initCursorEvents=function(){function t(t,e){var i=e.target.el;n&&n.emit(t,{target:i,ray:e.ray,point:e.point}),i&&i.emit(t,{target:i,ray:e.ray,point:e.point})}var e=this.el.object3D,n=document.querySelector("a-cursor")||document.querySelector("a-entity[cursor]");n&&(n.setAttribute("material","transparent",!0),n.setAttribute("material","opacity",0));var i=null;e.addEventListener("cursordown",function(e){i=e.target,t("mousedown",e)}),e.addEventListener("cursorup",function(e){t("mouseup",e),e.target.uuid===i.uuid&&t("click",e),i=null}),e.addEventListener("cursorenter",function(e){e.target.el&&(e.target.el.addState("hovered"),n&&n.addState("hovering"),t("mouseenter",e))}),e.addEventListener("cursorleave",function(e){e.target.el&&(e.target.el.removeState("hovered"),n&&n.removeState("hovering"),t("mouseleave",e))})},e.prototype.initCollisionEvents=function(){function t(t,e){var n=e.target.el;n&&(e.target=n,e.other&&e.other.el&&(e.other=e.other.el),n.emit(t,e))}var e=this.el.object3D;e.addEventListener("collisionenter",function(e){t("collisionenter",e)}),e.addEventListener("collisionexit",function(e){t("collisionexit",e)}),e.addEventListener("triggerenter",function(e){t("triggerenter",e)}),e.addEventListener("triggerexit",function(e){t("triggerexit",e)})},Object.defineProperties(e.prototype,n),e}(D),B=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={dependencies:{}};return n.dependencies.get=function(){return["sync"]},e.prototype.init=function(){this.sync=this.el.components.sync,this.sync.isConnected?start():this.el.addEventListener("connected",this.start.bind(this))},e.prototype.start=function(){var t=this.sync.dataRef.child("material/color"),e=!1,n=!0,i=this;this.el.addEventListener("componentchanged",function(n){var r=n.detail.name,o=n.detail.oldData,a=n.detail.newData;"material"===r&&!e&&o.color!==a.color&&i.sync.isMine&&setTimeout(function(){return t.set(a.color)},0)}),t.on("value",function(t){if(!i.sync.isMine||n){var r=t.val();e=!0,i.el.setAttribute("material","color",r),e=!1,n=!1}})},Object.defineProperties(e.prototype,n),e}(D),H=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{mode:{"default":"link"},ownOn:{type:"string"}}},e.prototype.init=function(){var t=this;if(this.isMine=!1,this.scene=this.el.sceneEl,this.syncSys=this.scene.systems["sync-system"],this.isConnected=!1,this.syncSys.isConnected?this.start():this.scene.addEventListener("connected",this.start.bind(this)),this.data.ownOn){var e=this.data.ownOn.split(/[ ,]+/);e.forEach(function(e){t.el.addEventListener(e,function(){t.isConnected&&t.takeOwnership()}.bind(t))}.bind(this))}},e.prototype.takeOwnership=function(){this.ownerRef.set(this.syncSys.clientId),this.ownerRef.onDisconnect().set(null)},e.prototype.start=function(){var t=this;if(this.scene.addEventListener("clientleft",function(e){var n=(!t.ownerId||t.ownerId===e.detail.id)&&t.syncSys.isMasterClient;n&&t.takeOwnership()}.bind(this)),"link"!==this.data.mode)return void console.error("Unsupportedsyncmode: "+this.data.mode);var e=this.el.id;return e?(this.link(this.syncSys.sceneRef.child(e)),this.setupReceive(),this.isConnected=!0,void this.el.emit("connected",null,!1)):void console.error("Entitiescannotbesyncedusinglinkmodewithoutanid.")},e.prototype.link=function(t){this.ref=t,this.key=this.ref.key(),this.dataRef=this.ref.child("data"),this.ownerRef=this.ref.child("owner")},e.prototype.setupReceive=function(){function t(t){var e=t.val(),n=e===this.syncSys.clientId&&!this.isMine;n&&this.el.emit("ownershipgained",null,!1);var i=e!==this.syncSys.clientId;i&&(this.el.emit("ownershiplost",null,!1),this.ownerRef.onDisconnect().cancel()),this.ownerId=e,this.isMine=e===this.syncSys.clientId}var e=this;this.ownerRef.transaction(function(t){return t?void 0:e.syncSys.clientId}.bind(this),function(n,i){i&&e.ownerRef.onDisconnect().set(null),e.ownerRef.on("value",t.bind(e))}.bind(this))},Object.defineProperties(e.prototype,n),e}(D),q=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{author:{type:"string","default":null},app:{type:"string","default":null},instance:{type:"string","default":null},refUrl:{type:"string","default":null}}},e.prototype.init=function(){return this.data&&this.data.app?(console.log(this.data),this.queuedInstantiations=[],this.isConnected=!1,void Promise.all([altspace.utilities.sync.connect({authorId:this.data.author,appId:this.data.app,instanceId:this.data.instance,baseRefUrl:this.data.refUrl}),altspace.getUser()]).then(this.connected.bind(this))):void console.warn("Thesync-systemmustbepresentonthesceneandconfiguredwithrequireddata.");
},e.prototype.connected=function(t){this.connection=t.shift(),this.userInfo=t.shift(),this.sceneRef=this.connection.instance.child("scene"),this.clientsRef=this.connection.instance.child("clients"),this.instantiatedElementsRef=this.connection.instance.child("instantiatedElements"),this.instantiatedElementsRef.on("child_added",this.listenToInstantiationGroup.bind(this)),this.instantiatedElementsRef.on("child_removed",this.stopListeningToInstantiationGroup.bind(this)),this.clientId=this.sceneEl.object3D.uuid,this.masterClientId=null;var e=this;this.clientsRef.on("value",function(t){var n=t.val(),i=Object.keys(n)[0];e.masterClientId=n[i]}),this.clientsRef.on("child_added",function(t){var n=t.val();setTimeout(function(){e.sceneEl.emit("clientjoined",{id:n},!1)},0)}),this.clientsRef.on("child_removed",function(t){var n=t.val();setTimeout(function(){e.sceneEl.emit("clientleft",{id:n},!1)},0)}),this.clientsRef.push(this.clientId).onDisconnect().remove(),this.connection.instance.child("initialized").once("value",function(t){var n=!t.val();t.ref().set(!0),e.processQueuedInstantiations(),e.sceneEl.emit("connected",{shouldInitialize:n},!1),e.isConnected=!0})},e.prototype.isMasterClient=function(){return this.masterClientId===this.clientId},e.prototype.listenToInstantiationGroup=function(t){t.ref().on("child_added",this.createElement.bind(this)),t.ref().on("child_removed",this.removeElement.bind(this))},e.prototype.stopListeningToInstantiationGroup=function(t){t.ref().off("child_added"),t.ref().off("child_removed")},e.prototype.processQueuedInstantiations=function(){var t=this;this.queuedInstantiations.forEach(function(e){e.creatorUserId=t.userInfo.userId,e.clientId=t.clientId,t.instantiatedElementsRef.child(e.groupName).push(e).onDisconnect().remove()}.bind(this)),this.queuedInstantiations.length=0},e.prototype.instantiate=function(t,e,n,i,r){if(!t)return void console.error("AltspaceVR: Instantiationrequiresamixinvalue.",n);var o=e&&e.id,a="A-SCENE"===e.nodeName;if(!o&&!a)return void console.error("AltspaceVR: Instantiationrequiresaparentwithanid.",n);var s=o?"#"+e.id:"a-scene",c={instantiatorId:r||"",groupName:i||"main",mixin:t,parent:s};this.queuedInstantiations.push(c),this.isConnected&&this.processQueuedInstantiations()},e.prototype.removeLast=function(t){var e=this;return new Promise(function(n){e.instantiatedElementsRef.child(t).orderByKey().limitToLast(1).once("value",function(t){if(!t.hasChildren())return void n();var e=t.val(),i=Object.keys(e)[0];n(e[i].instantiatorId),t.ref().child(i).remove()})}.bind(this))},e.prototype.createElement=function(t){var e=t.val(),n=t.key(),i=document.createElement("a-entity");i.id=e.groupName+"-instance-"+n,document.querySelector(e.parent).appendChild(i),i.setAttribute("mixin",e.mixin),i.dataset.creatorUserId=e.creatorUserId,this.userInfo.userId===e.creatorUserId&&i.classList.add("mine")},e.prototype.removeElement=function(t){var e=t.val(),n=t.key(),i=e.groupName+"-instance-"+n,r=document.querySelector("#"+i);r.parentNode.removeChild(r)},Object.defineProperties(e.prototype,n),e}(I),W=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={dependencies:{}};return n.dependencies.get=function(){return["sync"]},e.prototype.init=function(){this.sync=this.el.components.sync,this.sync.isConnected?start():this.el.addEventListener("connected",this.start.bind(this))},e.prototype.start=function(){function t(t,e){if(!n.isMine){var r=t.val();r&&i.el.setAttribute(e,r)}}function e(t){if(n.isMine){var e=t.detail.name,i=t.detail.newData;"position"===e?u(i):"rotation"===e?h(i):"scale"===e&&l(i)}}var n=this.sync,i=this,r=n.dataRef.child("position"),o=n.dataRef.child("rotation"),a=n.dataRef.child("scale");i.updateRate=100;var c=[];i.el.addEventListener("ownershiplost",function(){Array.from(i.el.children).forEach(function(t){var e=t.tagName.toLowerCase();"a-animation"===e&&(c.push(t),t.stop())})}),i.el.addEventListener("ownershipgained",function(){c.forEach(function(t){return t.start()}),c=[]}),r.on("value",function(e){return t(e,"position")}),o.on("value",function(e){return t(e,"rotation")}),a.on("value",function(e){return t(e,"scale")});var u=s(function(t){r.set(t)},i.updateRate),h=s(function(t){o.set(t)},i.updateRate),l=s(function(t){a.set(t)},i.updateRate);i.el.addEventListener("componentchanged",e)},Object.defineProperties(e.prototype,n),e}(D),V=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={dependencies:{}};return n.dependencies.get=function(){return["sync"]},e.prototype.init=function(){this.sync=this.el.components.sync,this.scene=this.el.sceneEl,this.syncSys=this.scene.systems["sync-system"],this.soundStateRef=null,this.soundEventRef=null,this.sync.isConnected?this.start():this.el.addEventListener("connected",this.start.bind(this))},e.prototype.remove=function(){this.soundStateRef.off("value"),this.soundEventRef.off("value")},e.prototype.start=function(){function t(t){if(this.sync.isMine){var t={type:t.type,sender:this.syncSys.clientId,el:this.el.id,time:Firebase.ServerValue.TIMESTAMP};this.soundEventRef.set(t)}}var e=this;this.soundStateRef=this.sync.dataRef.child("sound/state"),this.soundEventRef=this.sync.dataRef.child("sound/event"),this.el.addEventListener("sound-played",t.bind(this)),this.el.addEventListener("sound-paused",t.bind(this)),this.soundEventRef.once("value",function(t){var n=t.val();e.soundEventRef.on("value",function(t){var i=t.val();if(!(!i||n&&i.time===n.time||e.sync.isMine)&&i.el===e.el.id){var r=e.el.components["n-sound"];"sound-played"===i.type?r.playSound():r.pauseSound()}})}),this.el.addEventListener("componentchanged",function(t){if(e.sync.isMine){var n=t.detail.name;"n-sound"===n&&e.soundStateRef.set(t.detail.newData)}}),this.soundStateRef.on("value",function(t){if(!e.sync.isMine){var n=t.val();n&&e.el.setAttribute("n-sound",n)}})},Object.defineProperties(e.prototype,n),e}(D),G=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={dependencies:{}};return n.dependencies.get=function(){return["sync"]},e.prototype.init=function(){var t=this.el.sceneEl;this.syncSys=t.systems["sync-system"],this.sync=this.el.components.sync,this.syncSys.isConnected?this._start():t.addEventListener("connected",this._start.bind(this))},e.prototype.getDataRef=function(t){return this.sync.dataRef.child("n-skeleton-parent/"+t)},e.prototype._start=function(){this.attributeRef=this.sync.dataRef.child("n-skeleton-parent"),this.attributeRef.on("value",function(t){var e=t.val();e&&this.el.setAttribute("n-skeleton-parent",e)}.bind(this)),this.el.dataset.creatorUserId&&this.attributeRef.set(Object.assign({},this.el.components["n-skeleton-parent"].data,{userId:this.el.dataset.creatorUserId})),this.el.addEventListener("componentchanged",function(t){if(this.sync.isMine){var e=t.detail.name;"n-skeleton-parent"===e&&this.attributeRef.set(t.detail.newData)}}.bind(this))},Object.defineProperties(e.prototype,n),e}(D),K=function(t){function e(){t.call(this),this.multiple=!0}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{on:{type:"string"},emit:{type:"string"},gained:{type:"string"},lost:{type:"string"},gain:{type:"string"},lose:{type:"string"},targets:{type:"selectorAll"},target:{type:"selector"}}},e.prototype.init=function(){this.actOnTargets=function(){function t(t){this.data.emit&&t.emit(this.data.emit),this.data.gain&&t.addState(this.data.gain),this.data.lose&&t.removeState(this.data.lose)}this.updateProperties(this.attrValue),this.data.targets&&this.data.targets.forEach(t.bind(this)),this.data.target&&t.call(this,this.data.target),this.data.targets||this.data.target||t.call(this,this.el)}.bind(this),this.actOnTargetsIfStateMatches=function(t){var e=t.detail.state;(e===this.data.gained||e===this.data.lost)&&this.actOnTargets()}.bind(this)},e.prototype.update=function(t){t.on&&this.el.removeEventListener(t.on,this.actOnTargets),t.gained&&this.el.removeEventListener("stateadded",this.actOnTargetsIfStateMatches),t.lost&&this.el.removeEventListener("stateremoved",this.actOnTargetsIfStateMatches),this.data.on&&this.el.addEventListener(this.data.on,this.actOnTargets),this.data.gained&&this.el.addEventListener("stateadded",this.actOnTargetsIfStateMatches),this.data.lost&&this.el.addEventListener("stateremoved",this.actOnTargetsIfStateMatches)},e.prototype.remove=function(){this.el.removeEventListener(this.data.on,this.actOnTargets),this.el.removeEventListener("stateadded",this.actOnTargetsIfStateMatches),this.el.removeEventListener("stateremoved",this.actOnTargetsIfStateMatches)},Object.defineProperties(e.prototype,n),e}(D),Q=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{mixin:{type:"string"},parent:{type:"selector"}}},e.prototype.init=function(){var t=this.el.sceneEl;this.syncSys=t.systems["sync-system"],this.syncSys.instantiate(this.data.mixin,this.data.parent||this.el.parentNode,this.el)},Object.defineProperties(e.prototype,n),e}(D),z=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{on:{type:"string"},mixin:{type:"string"},parent:{type:"selector","default":"a-scene"},group:{type:"string","default":"main"},removeLast:{type:"boolean","default":"true"}}},e.prototype.init=function(){this.onHandler=this.instantiateOrToggle.bind(this),this.el.addEventListener(this.data.on,this.onHandler),this.syncSys=this.el.sceneEl.systems["sync-system"]},e.prototype.instantiateOrToggle=function(){var t=this.data.group+"-"+this.syncSys.userInfo.userId;this.data.removeLast?this.syncSys.removeLast(t).then(function(e){e!==this.el.id&&this.syncSys.instantiate(this.data.mixin,this.data.parent,this.el,t,this.el.id)}.bind(this)):this.syncSys.instantiate(this.el.id,t,this.data.mixin,this.data.parent)},e.prototype.remove=function(){this.el.removeEventListener(this.data.on,this.onHandler)},Object.defineProperties(e.prototype,n),e}(D);if(!window.altspace||!altspace.inClient){var Y=function(){};a(window,["altspace","addNativeComponent"],Y),a(window,["altspace","updateNativeComponent"],Y),a(window,["altspace","removeNativeComponent"],Y)}var X=new THREE.BoxGeometry(.001,.001,.001),J=new THREE.MeshBasicMaterial({color:0});J.visible=!1;var $=function(t){function e(){t.call(this,X,J)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(THREE.Mesh),Z=function(t){function e(e,n){void 0===n&&(n=!0),t.call(this),Object.assign(this,{name:e,sendUpdates:n})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.init=function(){var t=this,e=this.mesh||this.el.getOrCreateObject3D("mesh",$);this.currentMesh=e,a(e.userData,["altspace","collider","enabled"],!1),altspace.addNativeComponent(e,this.name),this.update(),this.mesh||this._dontRebind||this.el.addEventListener("object3dset",function(e){"mesh"===e.detail.type&&(altspace.removeNativeComponent(t.currentMesh,t.name),t._dontRebind=!0,t.init())}.bind(this))},e.prototype.update=function(){var t=this.mesh||this.el.object3DMap.mesh;this.sendUpdates&&altspace.updateNativeComponent(t,this.name,this.data)},e.prototype.remove=function(){var t=this.mesh||this.el.object3DMap.mesh;altspace.removeNativeComponent(t,this.name)},e.prototype.callComponent=function(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];var i=this.mesh||this.el.object3DMap.mesh;altspace.callNativeComponent(i,this.name,t,e)},e}(D),tt=function(t){function e(){t.call(this,"n-object")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{res:{type:"string"}}},Object.defineProperties(e.prototype,n),e}(Z),et=function(t){function e(){t.call(this,"n-spawner")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{res:{type:"string"}}},Object.defineProperties(e.prototype,n),e}(Z),nt=function(t){function e(){t.call(this,"n-text")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{text:{"default":"",type:"string"},fontSize:{"default":"10",type:"int"},width:{"default":"10",type:"number"},height:{"default":"1",type:"number"},horizontalAlign:{"default":"middle"},verticalAlign:{"default":"middle"}}},Object.defineProperties(e.prototype,n),e}(Z),it=function(t){function e(){t.call(this,"n-billboard",!1)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Z),rt=function(t){function e(){t.call(this,"n-skeleton-parent")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{part:{type:"string"},side:{type:"string","default":"center"},index:{type:"int","default":0},userId:{type:"string"}}},Object.defineProperties(e.prototype,n),e}(Z),ot=function(t){function e(){t.call(this,"n-cockpit-parent",!1)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Z),at=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{center:{type:"vec3"},type:{type:"string","default":"object"},isTrigger:{"default":!1,type:"boolean"}}},Object.defineProperties(e.prototype,n),e}(Z),st=function(t){function e(){t.call(this,"n-sphere-collider")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{radius:{"default":1,type:"number"}}},Object.defineProperties(e.prototype,n),e}(at),ct=function(t){function e(){t.call(this,"n-box-collider")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{size:{type:"vec3","default":"111"}}},Object.defineProperties(e.prototype,n),e}(at),ut=function(t){function e(){t.call(this,"n-capsule-collider")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{radius:{"default":"0",type:"number"},height:{"default":"0",type:"number"},direction:{"default":"y"}}},Object.defineProperties(e.prototype,n),e}(at),ht=function(t){function e(e,n){void 0===e&&(e=null),t.call(this,"n-mesh-collider"),this.mesh=e,this.subcomponents=[]}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{convex:{type:"boolean","default":"true"}}},e.prototype.init=function(){var n=this;if(this.mesh)t.prototype.init.call(this);else{this.subcomponents=[];var i=this.el.object3D;i.traverse(function(t){if(t instanceof THREE.Mesh){var i=new e(t);n.subcomponents.push(i),i.data=n.data,i.init()}}.bind(this)),this.el.addEventListener("model-loaded",this.init.bind(this))}},e.prototype.update=function(e){var n=this;this.mesh?t.prototype.update.call(this,e):this.subcomponents.forEach(function(t){t.data=n.data,t.update(e)}.bind(this))},e.prototype.remove=function(){this.mesh?t.prototype.remove.call(this):this.subcomponents.forEach(function(t){t.remove()}.bind(this))},Object.defineProperties(e.prototype,n),e}(at),lt=function(t){function e(){t.call(this,"n-container")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{capacity:{"default":4,type:"number"}}},e.prototype.init=function(){t.prototype.init.call(this);var e=this.el,n=this;e.addEventListener("stateadded",function(t){"container-full"===t.detail.state&&e.emit("container-full"),"container-empty"===t.detail.state&&e.emit("container-empty")}),e.addEventListener("container-count-changed",function(t){n.count=t.detail.count})},Object.defineProperties(e.prototype,n),e}(Z),ft=function(t){function e(){t.call(this,"n-portal")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{targetSpace:{type:"string"},targetEntity:{type:"selector"}}},e.prototype.update=function(){var t,e,n=this.el.object3DMap.mesh;if(this.data.targetEntity){this.el.sceneEl.object3D.updateMatrixWorld(!0),t=this.data.targetEntity.object3D.getWorldPosition();var i=this.data.targetEntity.object3D.getWorldQuaternion();e={x:i.x,y:i.y,z:i.z,w:i.w}}var r={targetSpace:this.data.targetSpace,targetPosition:t,targetQuaternion:e};altspace.updateNativeComponent(n,this.name,r)},Object.defineProperties(e.prototype,n),e}(Z);!function(){String.prototype.codePointAt||!function(){var t=function(){try{var t={},e=Object.defineProperty,n=e(t,t,t)&&e}catch(t){}return n}(),e=function(t){if(null==this)throw TypeError();var e=this+"",n=e.length,i=t?+t:0;if(i!=i&&(i=0),!(0>i||i>=n)){var r,o=e.charCodeAt(i);return o>=55296&&56319>=o&&n>i+1&&(r=e.charCodeAt(i+1),r>=56320&&57343>=r)?1024*(o-55296)+r-56320+65536:o}};t?t(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}(),String.prototype.repeat||!function(){var t=function(){try{var t={},e=Object.defineProperty,n=e(t,t,t)&&e}catch(t){}return n}(),e=function(t){if(null==this)throw TypeError();var e=this+"",n=t?+t:0;if(n!=n&&(n=0),0>n||n==1/0)throw RangeError();for(var i="";n;)n%2==1&&(i+=e),n>1&&(e+=e),n>>=1;return i};t?t(String.prototype,"repeat",{value:e,configurable:!0,writable:!0}):String.prototype.repeat=e}(),String.prototype.includes||!function(){var t={}.toString,e=function(){try{var t={},e=Object.defineProperty,n=e(t,t,t)&&e}catch(t){}return n}(),n="".indexOf,i=function(e){if(null==this)throw TypeError();var i=this+"";if(e&&"[objectRegExp]"==t.call(e))throw TypeError();var r=i.length,o=e+"",a=o.length,s=arguments.length>1?arguments[1]:void 0,c=s?+s:0;return c!=c&&(c=0),!(a+Math.min(Math.max(c,0),r)>r)&&-1!=n.call(i,o,c)};e?e(String.prototype,"includes",{value:i,configurable:!0,writable:!0}):String.prototype.includes=i}(),String.prototype.startsWith||!function(){var t=function(){try{var t={},e=Object.defineProperty,n=e(t,t,t)&&e}catch(t){}return n}(),e={}.toString,n=function(t){if(null==this)throw TypeError();var n=this+"";if(t&&"[objectRegExp]"==e.call(t))throw TypeError();var i=n.length,r=t+"",o=r.length,a=arguments.length>1?arguments[1]:void 0,s=a?+a:0;s!=s&&(s=0);var c=Math.min(Math.max(s,0),i);if(o+c>i)return!1;for(var u=-1;++u<o;)if(n.charCodeAt(c+u)!=r.charCodeAt(u))return!1;return!0};t?t(String.prototype,"startsWith",{value:n,configurable:!0,writable:!0}):String.prototype.startsWith=n}(),String.prototype.endsWith||!function(){var t=function(){try{var t={},e=Object.defineProperty,n=e(t,t,t)&&e}catch(t){}return n}(),e={}.toString,n=function(t){if(null==this)throw TypeError();var n=this+"";if(t&&"[objectRegExp]"==e.call(t))throw TypeError();var i=n.length,r=t+"",o=r.length,a=i;if(arguments.length>1){var s=arguments[1];void 0!==s&&(a=s?+s:0,a!=a&&(a=0))}var c=Math.min(Math.max(a,0),i),u=c-o;if(0>u)return!1;for(var h=-1;++h<o;)if(n.charCodeAt(u+h)!=r.charCodeAt(h))return!1;return!0};t?t(String.prototype,"endsWith",{value:n,configurable:!0,writable:!0}):String.prototype.endsWith=n}(),String.fromCodePoint||!function(){var t=function(){try{var t={},e=Object.defineProperty,n=e(t,t,t)&&e}catch(t){}return n}(),e=String.fromCharCode,n=Math.floor,i=function(t){var i,r,o=arguments,a=16384,s=[],c=-1,u=arguments.length;if(!u)return"";for(var h="";++c<u;){var l=+o[c];if(!isFinite(l)||0>l||l>1114111||n(l)!=l)throw RangeError("Invalidcodepoint: "+l);65535>=l?s.push(l):(l-=65536,i=(l>>10)+55296,r=l%1024+56320,s.push(i,r)),(c+1==u||s.length>a)&&(h+=e.apply(null,s),s.length=0)}return h};t?t(String,"fromCodePoint",{value:i,configurable:!0,writable:!0}):String.fromCodePoint=i}(),Object.defineProperty(String,"raw",{configurable:!0,enumerable:!1,writable:!0,value:function(t,e){var n;t=null!=t?t:{},e=arguments.length>1?i(arguments).slice(1):[];try{n=i(t.raw)}catch(i){throw new TypeError("Cannotconvertundefinedornulltoobject")}return n.map(function(n,i){return t.raw.length<=i?n:null!=e[i-1]?e[i-1]+n:n}).join("")}})}();var dt=function(t){function e(){t.call(this,"n-sound")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{res:{type:"string"},src:{type:"string"},on:{type:"string"},loop:{type:"boolean"},volume:{type:"number","default":1},autoplay:{type:"boolean"},oneshot:{type:"boolean"},spatialBlend:{type:"float","default":1},pitch:{type:"float","default":1},minDistance:{type:"float","default":1},maxDistance:{type:"float","default":12},rolloff:{type:"string","default":"logarithmic"}}},e.prototype.init=function(){var e=this.data.src;if(e&&!e.startsWith("http"))if(e.startsWith("/"))this.data.src=location.origin+e;else{var n=location.pathname;n.endsWith("/")||(n=location.pathname.split("/").slice(0,-1).join("/")+"/"),this.data.src=location.origin+n+e}t.prototype.init.call(this)},e.prototype.update=function(e){t.prototype.update.call(this,e),this.playHandler&&this.el.removeEventListener(e.on,this.playHandler),this.data.on&&(this.playHandler=this.playSound.bind(this),this.el.addEventListener(this.data.on,this.playHandler))},e.prototype.remove=function(){t.prototype.remove.call(this),this.playHandler&&this.el.removeEventListener(this.data.on,this.playHandler)},e.prototype.pauseSound=function(){this.callComponent("pause"),this.el.emit("sound-paused")},e.prototype.playSound=function(){this.callComponent("play"),this.el.emit("sound-played")},e.prototype.seek=function(t){this.callComponent("seek",{time:t})},Object.defineProperties(e.prototype,n),e}(Z),pt=function(t){function e(){t.call(this,"n-layout-browser")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={schema:{}};return n.schema.get=function(){return{url:{"default":"about: blank"},isEnclosure:{"default":!1}}},Object.defineProperties(e.prototype,n),e}(Z);window.AFRAME&&(r("altspace-cursor-collider",P),r("altspace-tracked-controls",U),r("altspace",N),o("sync-system",q),r("sync-color",B),r("sync-transform",W),r("sync",H),r("sync-n-sound",V),r("sync-n-skeleton-parent",G),r("wire",K),r("one-per-user",Q),r("instantiator",z),r("n-object",tt),r("n-portal",ft),r("n-spawner",et),r("n-text",nt),r("n-billboard",it),r("n-skeleton-parent",rt),r("n-cockpit-parent",ot),r("n-container",lt),r("n-sound",dt),r("n-sphere-collider",st),r("n-box-collider",ct),r("n-capsule-collider",ut),r("n-mesh-collider",ht),r("n-layout-browser",pt));var gt,bt,yt,vt,mt=Object.freeze({AltspaceComponent:N,AltspaceCursorCollider:P,AltspaceTrackedControls:U,SyncSystem:q,SyncComponent:H,SyncColor:B,SyncTransform:W,SyncNSound:V,Wire:K,OnePerUser:Q,Instantiator:z,SyncNSkeletonParent:G,NObject:tt,NPortal:ft,NSpawner:et,NText:nt,NBillboard:it,NSkeletonParent:rt,NCockpitParent:ot,NContainer:lt,NSound:dt,NSphereCollider:st,NBoxCollider:ct,NCapsuleCollider:ut,NMeshCollider:ht,NLayoutBrowser:pt}),wt=altspace&&altspace.inClient,Et=u(),_t=Object.freeze({connect:l}),jt=new THREE.Raycaster,St=Object.freeze({init:f}),Ft=function(t){void 0===t&&(t={auto:!0}),this._scene=null,this._renderer=null,this._camera=null;var e=window.AFRAME&&document.querySelector("a-scene");if(e){var n=document.querySelector("a-scene");this._scene=n.object3D,this._renderer=n.renderer;var i=document.querySelector("a-camera");i&&(this._camera=i.object3D)}else window.altspace&&altspace.inClient?(this._scene=new THREE.Scene,this._renderer=altspace.getThreeJSRenderer(),this._camera=new THREE.PerspectiveCamera):this._setupWebGL();t.auto&&!e&&this.loop()},Ct={scene:{},renderer:{},camera:{}};Ft.prototype._setupWebGL=function(){function t(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}var e=this._scene=new THREE.Scene,n=this._renderer=new THREE.WebGLRenderer({antialias:!0}),i=this._camera=new THREE.PerspectiveCamera;document.addEventListener("DOMContentLoaded",function(t){document.body.style.margin="0px",document.body.style.overflow="hidden",n.setClearColor("#035F72");var e=document.createElement("div");document.body.appendChild(e),e.appendChild(n.domElement)}),window.addEventListener("resize",t),t(),i.position.z=500,i.fov=45,i.near=1,i.far=2e3,e.add(i),e.add(new THREE.AmbientLight("white")),this.cursor=f(e,i)},Ft.prototype.loop=function(){window.requestAnimationFrame(this.loop.bind(this)),this.scene.updateAllBehaviors&&this.scene.updateAllBehaviors(),this.renderer.render(this.scene,this.camera)},Ct.scene.get=function(){return this._scene},Ct.renderer.get=function(){return this._renderer},Ct.camera.get=function(){return this._camera},Object.defineProperties(Ft.prototype,Ct);var Ot,At,kt="",Tt="",Rt=function(){this.objUrls=[],this.mtlUrls=[],this.objects=[],this.error=null,this.objectsLoaded=0},xt=Object.freeze({init:m,load:w,LoadRequest:Rt}),Lt="VRCodePen",It=window.name&&"pen-"===window.name.slice(0,4),Mt=!!window.altspace.inClient,Dt=!!location.href.match("codepen.io/"),Pt=Object.freeze({inTile:It,inVR:Mt,inCodePen:Dt,ensureInVR:j,setName:S,getPenId:C,getAuthorId:O,printDebugInfo:_}),Ut=function(){};Ut.prototype.load=function(t,e,n){var i=new THREE.MTLLoader,r=e.split("/").slice(0,-1).join("/");i.setTexturePath(r+"/"),i.setCrossOrigin(this.crossOrigin),i.load(e,function(e){var i=new THREE.OBJLoader;i.setMaterials(e),i.load(t,n)})},THREE&&!altspace.inClient&&(THREE.EventDispatcher.prototype.dispatchEvent=A,THREE.Object3D.prototype.dispatchEvent=A),THREE.Scene.prototype.updateAllBehaviors=function(){var t=performance.now(),e=this.__lastNow||t,n=t-e,i=this,r=[];this.traverse(function(t){t.__behaviorList&&r.push(t)});for(var o=0,a=r.length;a>o;o++){var s=r[o];s.updateBehaviors(n,i)}this.__lastNow=t},THREE.Object3D.prototype.addBehavior=function(t){this.addBehaviors(t)},THREE.Object3D.prototype.addBehaviors=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];this.__behaviorList=this.__behaviorList||[],(n=this.__behaviorList).push.apply(n,t);var n},THREE.Object3D.prototype.removeBehavior=function(t){if(!this.__behaviorList||0===this.__behaviorList.length)return null;var e=this.__behaviorList.indexOf(t);if(-1!==e){this.__behaviorList.splice(e,1);try{t.dispose&&t.dispose.call(t,this)}catch(n){console.group(),(console.error||console.log).call(console,n.stack||n),console.log("[Behavior]"),console.log(t),console.log("[Object3D]"),console.log(this),console.groupEnd()}}},THREE.Object3D.prototype.removeAllBehaviors=function(){var t=this;if(!this.__behaviorList||0===this.__behaviorList.length)return null;for(var e=0,n=this.__behaviorList.length;n>e;e++){var i=t.__behaviorList[e];try{i.dispose&&i.dispose.call(i,t)}catch(r){console.group(),(console.error||console.log).call(console,r.stack||r),console.log("[Behavior]"),console.log(i),console.log("[Object3D]"),console.log(t),console.groupEnd()}}this.__behaviorList.length=0},THREE.Object3D.prototype.getBehaviorByType=function(t){var e=this;if(!this.__behaviorList||0===this.__behaviorList.length)return null;for(var n=0,i=this.__behaviorList.length;i>n;n++)if(e.__behaviorList[n].type===t)return e.__behaviorList[n]},THREE.Object3D.prototype.updateBehaviors=function(t,e){var n=this;if(this.__behaviorList&&0!==this.__behaviorList.length){for(var i=[],r=this.__behaviorList.slice(),o=0,a=this.__behaviorList.length;a>o;o++){var s=n.__behaviorList[o];s.__isInitialized||i.push(s)}for(var o=0,a=i.length;a>o;o++){var s=i[o];try{s.awake&&s.awake.call(s,n,e)}catch(c){console.group(),(console.error||console.log).call(console,c.stack||c),console.log("[Behavior]"),console.log(s),console.log("[Object3D]"),console.log(n),console.groupEnd()}}for(var o=0,a=i.length;a>o;o++){var s=i[o];try{s.start&&s.start.call(s)}catch(c){console.group(),(console.error||console.log).call(console,c.stack||c),console.log("[Behavior]"),console.log(s),console.log("[Object3D]"),console.log(n),console.groupEnd()}s.__isInitialized=!0}for(var o=0,a=r.length;a>o;o++){var s=r[o];try{s.update&&s.update.call(s,t)}catch(c){console.group(),(console.error||console.log).call(console,c.stack||c),console.log("[Behavior]"),console.log(s),console.log("[Object3D]"),console.log(n),console.groupEnd()}}}};var Nt=Object.freeze({OBJMTLLoader:Ut,cursor:St}),Bt=function(){},Ht={type:{}};Ht.type.get=function(){return this._typeWarning||(console.warn("Behavior",this,"doesnotexposetypeinformation!","ItwillnotbequeryablebygetBehaviorByType,
	whichwillbreak","somebuilt-inbehaviors."),this._typeWarning=!0),null},Bt.prototype.awake=function(t,e){},Bt.prototype.start=function(){},Bt.prototype.update=function(t){},Bt.prototype.dispose=function(t){},Object.defineProperties(Bt.prototype,Ht);var qt=function(t){function e(e){t.call(this),this.config=Object.assign({x:3,y:5,shouldRotate:!0,shouldMove:!0},e),this.object3d=null,this.offsetPosition=null,this.lastBobPosition=new THREE.Vector3,this.nowOffset=1e4*Math.random()}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"Bob"},e.prototype.awake=function(t){this.object3d=t,this.offsetPosition=this.object3d.position.clone()},e.prototype.update=function(t){var e=Math.floor(performance.now())+this.nowOffset;this.config.shouldMove&&(this.lastBobPosition.equals(this.object3d.position)||this.offsetPosition.copy(this.object3d.position),this.object3d.position.y=this.offsetPosition.y+Math.sin(e/800)*this.config.x,this.object3d.position.x=this.offsetPosition.x+Math.sin(e/500)*this.config.y,this.lastBobPosition.copy(this.object3d.position)),this.config.shouldRotate&&(this.object3d.rotation.x=Math.sin(e/500)/15)},Object.defineProperties(e.prototype,n),e}(Bt),Wt=function(t){function e(e){t.call(this),this.config=Object.assign({overBrightness:1.5,downBrightness:.5},e),this.object3d=null,this.scene=null,this.originalColor=null,this.modifiedColor=new THREE.Color,this._cbs={cursorenter:this.cursorEnter.bind(this),cursordown:this.cursorDown.bind(this),cursorup:this.cursorUp.bind(this),cursorleave:this.cursorLeave.bind(this)}}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"ButtonStateStyle"},e.prototype.awake=function(t,e){this.object3d=t,this.scene=e,this.originalColor=this.config.originalColor||this.object3d.material.color,this.object3d.addEventListener("cursorenter",this._cbs.cursorenter),this.object3d.addEventListener("cursordown",this._cbs.cursordown)},e.prototype.dispose=function(){this.object3d.removeEventListener("cursorenter",this._cbs.cursorenter),this.object3d.removeEventListener("cursorleave",this._cbs.cursorleave),this.object3d.removeEventListener("cursorup",this._cbs.cursorup),this.object3d.removeEventListener("cursordown",this._cbs.cursordown)},e.prototype.changeBrightness=function(t){this.modifiedColor.set(this.originalColor),this.modifiedColor.multiplyScalar(t),this.modifiedColor.r=THREE.Math.clamp(this.modifiedColor.r,0,1),this.modifiedColor.g=THREE.Math.clamp(this.modifiedColor.g,0,1),this.modifiedColor.b=THREE.Math.clamp(this.modifiedColor.b,0,1),this.object3d.material.color=this.modifiedColor},e.prototype.cursorLeave=function(){this.object3d.removeEventListener("cursorleave",this._cbs.cursorleave),this.changeBrightness(1)},e.prototype.cursorEnter=function(){this.changeBrightness(this.config.overBrightness),this.object3d.addEventListener("cursorleave",this._cbs.cursorleave)},e.prototype.cursorUp=function(t){
this.scene.removeEventListener("cursorup",this._cbs.cursorup),this.object3d.addEventListener("cursorenter",this._cbs.cursorenter),t.target===this.object3d?(this.changeBrightness(this.config.overBrightness),this.object3d.addEventListener("cursorleave",this._cbs.cursorleave)):this.changeBrightness(1)},e.prototype.cursorDown=function(){this.scene.addEventListener("cursorup",this._cbs.cursorup),this.object3d.removeEventListener("cursorleave",this._cbs.cursorleave),this.object3d.removeEventListener("cursorenter",this._cbs.cursorenter),this.changeBrightness(this.config.downBrightness)},Object.defineProperties(e.prototype,n),e}(Bt),Vt=function(t){function e(e){t.call(this),this.config=e=Object.assign({space:"world",x:!1,y:!1,z:!1,cursorSnap:!0},e),this.min=new THREE.Vector3(void 0!==e.x.min?e.x.min:Number.NEGATIVE_INFINITY,void 0!==e.y.min?e.y.min:Number.NEGATIVE_INFINITY,void 0!==e.z.min?e.z.min:Number.NEGATIVE_INFINITY),this.max=new THREE.Vector3(void 0!==e.x.max?e.x.max:Number.POSITIVE_INFINITY,void 0!==e.y.max?e.y.max:Number.POSITIVE_INFINITY,void 0!==e.z.max?e.z.max:Number.POSITIVE_INFINITY),this.object3d=null,this.scene=null,this.sync=null,this.intersector=null,this.dragOffset=new THREE.Vector3,this.raycaster=new THREE.Raycaster,this.raycaster.linePrecision=3,this._cbs={startDrag:this.startDrag.bind(this),moveDrag:this.moveDrag.bind(this),stopDrag:this.stopDrag.bind(this)}}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"Drag"},e.prototype.awake=function(t,e){this.object3d=t,this.scene=e,this.sync=t.getBehaviorByType("Object3DSync"),this.makeIntersector(),this.scene.add(this.intersector)},e.prototype.start=function(){this.object3d.addEventListener("cursordown",this._cbs.startDrag)},e.prototype.dispose=function(){this.object3d.removeEventListener("cursordown",this._cbs.startDrag)},e.prototype.makeIntersector=function(){function t(){r.rotateY(Math.PI)}function e(){r.rotateX(Math.PI/2)}function n(){r.rotateY(Math.PI/2)}var i=1e4,r=new THREE.PlaneGeometry(i,i),o=!!this.config.x,a=!!this.config.y,s=!!this.config.z,c=o+a+s;if(3===c)throw new Error("Arbitrarydraggingcurrentlyunsupported.Pleaselockatleastoneaxis.");if(2!==c)throw 1===c?new Error("Singleaxisdraggingcurrentlyunsupported."):new Error("Invalidaxisconfiguration");o&&a?t():o&&s?e():a&&s&&n();var u=new THREE.MeshBasicMaterial({color:"purple"});u.side=THREE.DoubleSide,this.intersector=new THREE.Mesh(r,u),this.intersector.visible=!1,this.intersector.material.visible=!1},e.prototype.startDrag=function(t){this.scene.addEventListener("cursorup",this._cbs.stopDrag),this.scene.addEventListener("cursormove",this._cbs.moveDrag),this.raycaster.set(t.ray.origin,t.ray.direction);var e=this.raycaster.intersectObject(this.object3d,!0)[0];if(e){var n=e.point.clone(),i=k(this.object3d).clone();this.dragOffset.copy(n).sub(i),this.intersector.position.copy(this.intersector.parent.worldToLocal(n)),this.intersector.quaternion.copy(this.object3d.parent.quaternion),this.intersector.updateMatrixWorld();var r=this.createDragEvent("dragstart");this.object3d.dispatchEvent(r)}},e.prototype.moveDrag=function(t){this.sync&&!this.sync.isMine&&this.sync.takeOwnership(),this.intersector.visible=!0,this.raycaster.set(t.ray.origin,t.ray.direction);var e=this.raycaster.intersectObject(this.intersector,!0)[0];if(this.intersector.visible=!1,e){var n=new THREE.Vector3;n.copy(e.point).sub(this.dragOffset);var i=this,r=k(this.object3d);["x","y","z"].filter(function(t){return!i.config[t]}).forEach(function(t){n[t]=r[t]}),n.clamp(this.min,this.max),this.object3d.parent.updateMatrixWorld();var o=this.object3d.parent.worldToLocal(n);this.object3d.position.set(this.config.x?o.x:this.object3d.position.x,this.config.y?o.y:this.object3d.position.y,this.config.z?o.z:this.object3d.position.z)}},e.prototype.stopDrag=function(){this.scene.removeEventListener("cursorup",this._cbs.stopDrag),this.scene.removeEventListener("cursormove",this._cbs.moveDrag);var t=this.createDragEvent("dragstop");this.object3d.dispatchEvent(t)},e.prototype.createDragEvent=function(t){return{type:t,bubbles:!0,target:this.object3d,ray:this.raycaster.ray.clone()}},Object.defineProperties(e.prototype,n),e}(Bt),Gt=.2,Kt=function(t){function e(e){t.call(this),this.config=Object.assign({position:!0,rotation:!0,scale:!0},e),this.object3d=null,this.gamepad=null,this.scene=null,this.sync=null,this.isAltModeR=!1,this.isAltModeL=!1,this.prevAltButtonR=!1,this.prevAltButtonL=!1,this.isInitialized=!1,this.originalObj=null}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"GamepadControls"},e.prototype.awake=function(t,e){var n=this;if(this.object3d=t,this.scene=e,this.sync=this.object3d.getBehaviorByType("Object3DSync"),this.originalObj=this.object3d.clone(),this.gamepad=this.getGamepad(),this.gamepad)console.log("Gamepaddetected: "+this.gamepad.id);else var i=setInterval(function(){n.gamepad=n.getGamepad(),n.gamepad&&(console.log("Gamepadconnected: "+n.gamepad.id),clearInterval(i))}.bind(this),500);this.scene.addEventListener("cursordown",function(t){n.gamepad&&!n.isInitialized&&(n.preventDefault(n.gamepad),n.isInitialized=!0)}.bind(this))},e.prototype.getGamepad=function(){var t=this,e=[];if(e=altspace&&altspace.inClient?altspace.getGamepads():navigator.getGamepads(),e.length>0)for(var n=0;n<e.length;n++){var i=e[n];if(i&&i.axes&&4===i.axes.length&&i.buttons&&16===i.buttons.length)return altspace&&altspace.inClient&&t.preventDefault(i),i}return void 0},e.prototype.preventDefault=function(t){var e=new Array(4).fill(!1),n=new Array(16).fill(!1);this.config.position&&(e[0]=!0,e[1]=!0,n[10]=!0),this.config.rotation&&(e[2]=!0,e[3]=!0,n[11]=!0),this.config.scale&&(n[12]=!0,n[13]=!0),n[8]=!0,t.preventDefault(e,n)},e.prototype.update=function(t){if(altspace&&altspace.inClient||!window.chrome||!this.gamepad||(this.gamepad=this.getGamepad()),this.gamepad){var e=this.gamepad.buttons[8].pressed;if(e)return this.sync.isMine||this.sync.takeOwnership(),this.object3d.position.copy(this.originalObj.position),this.object3d.rotation.copy(this.originalObj.rotation),void this.object3d.scale.copy(this.originalObj.scale);if(this.config.position){var n=this.gamepad.buttons[10].pressed;this.prevAltButtonL&&!n&&(this.isAltModeL=!this.isAltModeL),this.prevAltButtonL=n;var i=this.gamepad.axes[0],r=this.gamepad.axes[1],o=Math.abs(i)>Gt||Math.abs(r)>Gt;o&&!this.sync.isMine&&this.sync.takeOwnership();var a=200*(t/1e3);Math.abs(i)>Gt&&(this.object3d.position.x+=a*i),Math.abs(r)>Gt&&(this.isAltModeL?this.object3d.position.y+=a*-r:this.object3d.position.z+=a*r)}if(this.config.rotation){var s=this.gamepad.buttons[11].pressed;this.prevAltButtonR&&!s&&(this.isAltModeR=!this.isAltModeR),this.prevAltButtonR=s;var c=this.gamepad.axes[2],u=this.gamepad.axes[3],h=Math.abs(c)>Gt||Math.abs(u)>Gt;h&&!this.sync.isMine&&this.sync.takeOwnership();var l=Math.PI*(t/1e3);!this.isAltModeR&&Math.abs(u)>Gt&&(this.object3d.rotation.x+=l*u),Math.abs(c)>Gt&&(this.isAltModeR?this.object3d.rotation.z+=l*-c:this.object3d.rotation.y+=l*c)}if(this.config.scale){var f=10*(t/1e3),d=this.gamepad.buttons[12].pressed,p=this.gamepad.buttons[13].pressed,g=this.gamepad.buttons[12].pressed||this.gamepad.buttons[13].pressed;g&&!this.sync.isMine&&this.sync.takeOwnership();var b=this.object3d.scale,y=new THREE.Vector3(1,1,1);y.multiplyScalar(f),d&&this.object3d.scale.add(y),p&&b.x>y.x&&b.y>y.y&&b.z>y.z&&this.object3d.scale.sub(y)}}},Object.defineProperties(e.prototype,n),e}(Bt),Qt=function(t){function e(e){var n=this;if(t.call(this),this.config=Object.assign({event:"cursorenter",color:new THREE.Color("yellow")},e),"cursorenter"!==this.config.event&&"cursordown"!==this.config.event)throw Error('Expected config.event "cursorenter" or "cursordown"');this.object3d=null,this.cursordownObject=null,this.cursorenterObject=null,this.scene=null,this.cursordown=function(t){n.cursordownObject=n.object3d,"cursordown"===n.config.event&&n.setColor(n.cursordownObject)}.bind(this),this.cursorenter=function(t){n.cursordownObject&&n.cursordownObject!==n.object3d||(n.cursorenterObject&&n.unsetColor(n.cursorenterObject),n.cursorenterObject=n.object3d,n.setColor(n.object3d))}.bind(this),this.cursorleave=function(t){n.cursorenterObject===n.object3d&&(n.cursorenterObject=null,n.unsetColor(n.object3d))}.bind(this),this.cursorupScene=function(t){"cursordown"===n.config.event&&n.cursordownObject&&n.unsetColor(n.cursordownObject),n.cursordownObject=null}.bind(this)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"HoverColor"},e.prototype.awake=function(t,e){this.object3d=t,this.scene=e,this.object3d.addEventListener("cursordown",this.cursordown),this.scene.addEventListener("cursorup",this.cursorupScene),"cursorenter"===this.config.event&&(this.object3d.addEventListener("cursorenter",this.cursorenter),this.object3d.addEventListener("cursorleave",this.cursorleave))},e.prototype.dispose=function(){this.object3d.removeEventListener("cursordown",this.cursordown),this.scene.removeEventListener("cursorup",this.cursorupScene),this.object3d.removeEventListener("cursorenter",this.cursorenter),this.object3d.removeEventListener("cursorleave",this.cursorleave)},e.prototype.setColor=function(t){t.material&&t.material.color&&(t.userData.origColor=t.material.color,t.material.color=this.config.color,t.material&&(t.material.needsUpdate=!0)),t.children.forEach(this.setColor.bind(this))},e.prototype.unsetColor=function(t){if(t.material&&t.material.color){if(!t.userData.origColor)return void console.error("CannotunsetColor,
	nouserData.origColorforobject",t);t.material.color=t.userData.origColor,t.material&&(t.material.needsUpdate=!0)}t.children.forEach(this.unsetColor.bind(this))},Object.defineProperties(e.prototype,n),e}(Bt),zt=function(t){function e(e){var n=this;t.call(this),this.config=Object.assign({scale:1.15,duration:75,revertOnDispose:!0},e),this.object3d=null,this.originalScale=null,this.elapsedTime=this.config.duration,this.progress=1,this.srcScale=null,this.destScale=null,this.onHoverStateChange=function(){var t;t=[n.destScale,n.srcScale],n.srcScale=t[0],n.destScale=t[1],n.progress=1-n.progress,n.elapsedTime=n.config.duration-n.elapsedTime}.bind(this)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"HoverScale"},e.prototype.awake=function(t,e){this.object3d=t,this.originalScale=this.object3d.scale.clone(),this.srcScale=this.object3d.scale.clone(),this.srcScale.multiplyScalar(this.config.scale),this.destScale=new THREE.Vector3,this.destScale.copy(this.originalScale),this.progress=1,this.elapsedTime=this.config.duration,this.object3d.addEventListener("cursorenter",this.onHoverStateChange),this.object3d.addEventListener("cursorleave",this.onHoverStateChange)},e.prototype.update=function(t){this.progress<1&&(this.elapsedTime=THREE.Math.clamp(this.elapsedTime+t,0,this.config.duration),this.progress=THREE.Math.clamp(this.elapsedTime/this.config.duration,0,1),this.object3d.scale.lerpVectors(this.srcScale,this.destScale,this.progress))},e.prototype.dispose=function(){this.object3d.removeEventListener("cursorenter",this.onHoverStateChange),this.object3d.removeEventListener("cursorleave",this.onHoverStateChange),this.config.revertOnDispose&&this.object3d.scale.copy(this.originalScale),this.originalScale=null,this.srcScale=null,this.destScale=null,this.object3d=null},Object.defineProperties(e.prototype,n),e}(Bt),Yt=function(t){function e(n){t.call(this),this.config=Object.assign({jointCubeSize:15,joints:e.HAND_JOINTS},n),this.object3d=null,this.skeleton=null,this.jointCube=null,this.hasCollided=!1,this.collidedJoints=[],this.jointIntersectUnion=null}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"JointCollisionEvents"},e.prototype.awake=function(t,e){this.object3d=t;var n=this;T(e).then(function(t){n.skeleton=t,n.jointCube=new THREE.Vector3(n.config.jointCubeSize,n.config.jointCubeSize,n.config.jointCubeSize)})["catch"](function(t){console.log("Failedtogettrackingskeleton",t)})},e.prototype.update=function(t){var e=this;if(this.skeleton){for(var n=[],i=0;i<this.config.joints.length;i++)n[i]=e.skeleton.getJoint(e.config.joints[i][0],e.config.joints[i][1],e.config.joints[i][2]||0);var r=(new THREE.Box3).setFromObject(this.object3d),o=this.jointIntersectUnion;this.jointIntersectUnion=null;var a=this.collidedJoints;this.collidedJoints=[];var s=this.hasCollided;if(this.hasCollided=!1,this.object3d.visible&&this.object3d.scale.x>Number.EPSILON&&this.object3d.scale.y>Number.EPSILON&&this.object3d.scale.z>Number.EPSILON)for(var c=0;c<this.config.joints.length;c++){var u=n[c];if(u&&0!==u.confidence){var h=(new THREE.Box3).setFromCenterAndSize(u.position,e.jointCube),l=r.intersectsBox(h);if(l){var f=r.intersect(h);e.jointIntersectUnion?e.jointIntersectUnion.union(f):e.jointIntersectUnion=f,e.hasCollided=!0,e.collidedJoints.push(u)}}}!s&&this.hasCollided?this.object3d.dispatchEvent(new Jt(this.jointIntersectUnion,this.collidedJoints,this.object3d)):s&&!this.hasCollided&&this.object3d.dispatchEvent(new $t(o||new THREE.Box3,a,this.object3d)),this.hasCollided&&this.object3d.dispatchEvent(new Zt(this.jointIntersectUnion,this.collidedJoints,this.object3d))}},Object.defineProperties(e.prototype,n),e}(Bt),Xt=function(t,e,n,i){this.type=t,this.detail={intersect:e,joints:n},this.bubbles=!0,this.target=i},Jt=function(t){function e(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];t.apply(this,["jointcollisionenter"].concat(e))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Xt),$t=function(t){function e(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];t.apply(this,["jointcollisionleave"].concat(e))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Xt),Zt=function(t){function e(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];t.apply(this,["jointcollision"].concat(e))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Xt);Yt.HAND_JOINTS=[["Hand","Left",0],["Thumb","Left",3],["Index","Left",3],["Middle","Left",3],["Ring","Left",3],["Pinky","Left",3],["Hand","Right",0],["Thumb","Right",3],["Index","Right",3],["Middle","Right",3],["Ring","Right",3],["Pinky","Right",3]];var te=Symbol("containerMax"),ee=Symbol("containerMin"),ne=Symbol("object3D"),ie=Symbol("boundingBox"),re=Symbol("origMatrix"),oe=Symbol("origMatrixAutoUpdate"),ae=Symbol("parent"),se=Symbol("enclosure"),ce=new Map,ue=function(t){function e(e){var n=e.my;void 0===n&&(n={});var i=e.at;t.call(this),this.my=n,this.at=i}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"Layout"},e.prototype.getAxisSettings=function(t,e,n,i){e=e||"center",e=/(\w+)([-+].+)?/.exec(e);var r=e[1],o=e[2],a=parseFloat(o)||0;return o&&o.endsWith("%")?a=a/100*(i[t]-n[t]):o&&o.endsWith("m")&&(a*=this[se].pixelsPerMeter),{position:r,offset:a}},e.prototype.getAnchorOffset=function(t,e){var n=this[ie].max,i=this[ie].min,r=this.getAxisSettings(t,e,i,n),o=r.position,a=r.offset;if("max"===o)return-n[t]+a;if("min"===o)return-i[t]+a;if("center"===o)return a;throw new Error(e+"isaninvalidlayoutpositionfor"+t)},e.prototype.doLayout=function(){var t=this;Array.from("xyz").forEach(function(e){var n=t.getAxisSettings(e,t.at[e],t[ee],t[te]),i=n.position,r=n.offset,o=t.getAnchorOffset(e,t.my[e]);if("max"===i)t[ne].position[e]=t[te][e]+r+o;else if("min"===i)t[ne].position[e]=t[ee][e]+r+o;else{if("center"!==i)throw new Error(t.at[e]+"isaninvalidlayoutpositionfor"+e);t[ne].position[e]=r+o}}),this[ae]&&(this[ae].matrix=this[re],this[ae].updateMatrixWorld(!0),this[ae].matrixAutoUpdate=this[oe])},e.prototype.awake=function(t){var e=this;this[ne]=t,this[ie]=(new THREE.Box3).setFromObject(this[ne]),altspace.getEnclosure().then(function(t){if(e[se]=t,e[ne].parent instanceof THREE.Scene){var n=e[se].innerWidth/2,i=e[se].innerHeight/2,r=e[se].innerDepth/2;e[te]=new THREE.Vector3(n,i,r),e[ee]=new THREE.Vector3(-n,-i,-r),e.doLayout()}else{var o=e[ne].getWorldScale();e[ie].min.divide(o),e[ie].max.divide(o),e[ae]=e[ne].parent,e[re]=e[ae].matrix.clone(),e[oe]=e[ae].matrixAutoUpdate,e[ae].matrixAutoUpdate=!1,e[ae].matrix.identity();var a;ce.has(e[ae].uuid)?a=ce.get(e[ae].uuid):(e[ae].remove(e[ne]),a=(new THREE.Box3).setFromObject(e[ae]),e[ae].add(e[ne]),ce.set(e[ae].uuid,a)),e[te]=a.max,e[ee]=a.min,e.doLayout()}})},Object.defineProperties(e.prototype,n),e}(Bt),he=function(t){function e(e){t.call(this),this.config=Object.assign({position:!1,rotation:!1,scale:!1,auto:!1,world:!1},e),this.object3d=null,this.scene=null,this.ref=null,this.key=null,this.dataRef=null,this.ownerRef=null,this.transformRef=null,this.sceneSync=null,this.isMine=!1,this.position=new THREE.Vector3,this.quaternion=new THREE.Quaternion,this.scale=new THREE.Vector3}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"Object3DSync"},e.prototype.awake=function(t,e){this.object3d=t,this.scene=e,this.setupReceive()},e.prototype.setupReceive=function(){var t=this;this.transformRef.on("value",function(e){var n=e.val();!t.isMine&&n&&(t.config.position&&t.object3d.position.set(n.position.x,n.position.y,n.position.z),t.config.rotation&&t.object3d.quaternion.set(n.quaternion.x,n.quaternion.y,n.quaternion.z,n.quaternion.w),t.config.scale&&t.object3d.scale.set(n.scale.x,n.scale.y,n.scale.z))}.bind(this)),this.ownerRef.on("value",function(e){var n=e.val();n!==t.sceneSync.clientId||t.isMine||t.object3d.dispatchEvent({type:"ownershipgained"}),n!==t.sceneSync.clientId&&t.isMine&&t.object3d.dispatchEvent({type:"ownershiplost"}),t.isMine=n===t.sceneSync.clientId}.bind(this))},e.prototype.link=function(t,e){this.ref=t,this.key=this.ref.key(),this.transformRef=this.ref.child("batch"),this.dataRef=this.ref.child("data"),this.ownerRef=this.ref.child("owner"),this.sceneSync=e},e.prototype.autoSend=function(){if(this.isMine){var t={};if(this.config.world?(this.object3d.updateMatrixWorld(),this.object3d.matrixWorld.decompose(this.position,this.quaternion,this.scale)):(this.position=this.object3d.position,this.quaternion=this.object3d.quaternion,this.scale=this.object3d.scale),this.config.position&&(t.position={x:this.position.x,y:this.position.y,z:this.position.z}),this.config.rotation&&(t.quaternion={x:this.quaternion.x,y:this.quaternion.y,z:this.quaternion.z,w:this.quaternion.w}),this.config.scale&&(t.scale={x:this.scale.x,y:this.scale.y,z:this.scale.z}),Object.keys(t).length>0){if(R(t,this.lastTransform))return;this.transformRef.set(t),this.lastTransform=t}}},e.prototype.takeOwnership=function(){this.ownerRef.set(this.sceneSync.clientId)},Object.defineProperties(e.prototype,n),e}(Bt),le=[],fe={},de={},pe=function(t){function e(e,n){t.call(this),this.config=Object.assign({instantiators:{},destroyers:{},ready:null,autoSendRateMS:100},n),this.instanceRef=e,this.sceneRef=e.child("scene"),this.clientsRef=e.child("clients"),this.clientId=null,this.masterClientId=null}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{},isMasterClient:{}};return n.type.get=function(){return"SceneSync"},e.prototype.awake=function(t,e){var n=this;setInterval(x,this.config.autoSendRateMS);var i=e;this.clientId=i.uuid,this.clientsRef.on("value",function(t){var e=t.val();if(e){var i=Object.keys(e)[0];n.masterClientId=e[i]}}.bind(this)),this.clientsRef.push(this.clientId).onDisconnect().remove(),this.instanceRef.child("initialized").once("value",function(t){var e=!t.val();t.ref().set(!0),n.config.ready&&n.config.ready(e)}.bind(this)),this.sceneRef.on("child_added",this.onInstantiate.bind(this)),this.sceneRef.on("child_removed",this.onDestroy.bind(this))},e.prototype.instantiate=function(t,e,n){void 0===e&&(e={});var i=this.sceneRef.push({syncType:t,initData:e},function(t){if(t)throw Error("FailedtosavetoFirebase",t)});n&&i.onDisconnect().remove();var r=fe[i.key()];return r.getBehaviorByType("Object3DSync").takeOwnership(),r},e.prototype.onInstantiate=function(t){var e=t.val(),n=t.key(),i=this.config.instantiators[e.syncType];if(!i)return void console.warn("NoinstantiatorfoundforsyncType: "+e.syncType);var r=i(e.initData,e.syncType);if(!r)return void console.error(e.syncType+".createmustreturnanObject3D");fe[n]=r,de[r.uuid]=n;var o=r.getBehaviorByType("Object3DSync");return o?(le.push(o),void o.link(t.ref(),this)):void console.error(e.syncType+"instantiatormustreturnanObject3DwithanObject3DSyncbehavior")},e.prototype.destroy=function(t){var e=de[t.uuid];return e?(this.sceneRef.child(e).remove(function(t){t&&console.warn("FailedtoremovefromFirebase",t)}),void this.sceneRef.child(e).off()):void console.warn("Failedtofindkeyforobject3dtobedestroyed",t)},e.prototype.onDestroy=function(t){function e(t){t.removeAllBehaviors(),t.parent&&t.parent.remove(t),t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}var n=t.val(),i=t.key(),r=fe[i];if(!r)return void console.warn("Failedtofindobjectmatchingdeletedkey",i);var o=n.syncType;if(!o)return void console.warn("NosyncTypefoundforobjectbeingdestroyed",r);var a=this.config.destroyers[o],s=!a;a&&(s=a(r)),s&&e(r),delete fe[i],delete de[r.uuid]},n.isMasterClient.get=function(){return this.masterClientId===this.clientId},Object.defineProperties(e.prototype,n),e}(Bt),ge=function(t){function e(e){t.call(this),this.config=Object.assign({speed:1e-4,axis:new THREE.Vector3(0,1,0)},e),this.config.axis.normalize(),this.object3d=null}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"Spin"},e.prototype.awake=function(t){this.object3d=t},e.prototype.update=function(t){this.object3d.rotateOnAxis(this.config.axis,this.config.speed*t)},Object.defineProperties(e.prototype,n),e}(Bt),be=function(t){function e(e){t.call(this),this.config=Object.assign({logging:!1},e)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"SteamVRInput"},e.prototype.awake=function(){var t=this;this.leftControllerPromise=L(e.LEFT_CONTROLLER,this.config),this.rightControllerPromise=L(e.RIGHT_CONTROLLER,this.config),this.firstControllerPromise=Promise.race([this.leftControllerPromise,this.rightControllerPromise]),this.leftControllerPromise.then(function(e){t.leftController=e}),this.rightControllerPromise.then(function(e){t.rightController=e}),this.firstControllerPromise.then(function(n){t.firstController=n;var i=n.axes.map(function(){return!1}),r=n.buttons.map(function(){return!1});r[e.BUTTON_TRIGGER]=!0,r[e.BUTTON_TOUCHPAD]=!0,n.preventDefault(i,r)})},Object.defineProperties(e.prototype,n),e}(Bt);Object.assign(be,{BUTTON_TRIGGER:0,BUTTON_GRIP:1,BUTTON_TOUCHPAD:2,BUTTON_DPAD_UP:3,BUTTON_DPAD_RIGHT:4,BUTTON_DPAD_DOWN:5,BUTTON_DPAD_LEFT:6,AXIS_TOUCHPAD_X:0,AXIS_TOUCHPAD_Y:1,FIRST_CONTROLLER:"first",LEFT_CONTROLLER:"left",RIGHT_CONTROLLER:"right"});var ye=function(t){function e(e){var n=e.hand;void 0===n&&(n="first"),t.call(this),this._hand=n}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"SteamVRTrackedObject"},e.prototype.awake=function(t,e){this._object3d=t,this._scene=e,this._steamVRInput=this._scene.getBehaviorByType("SteamVRInput")},e.prototype.update=function(){var t=this._steamVRInput[this._hand+"Controller"],e=this._object3d;if(t){var n=t.position,i=n.x,r=n.y,o=n.z;e.position.set(i,r,o);var a=t.rotation,i=a.x,r=a.y,o=a.z,s=a.w;e.quaternion.set(i,r,o,s)}},Object.defineProperties(e.prototype,n),e}(Bt),ve=function(t){function e(e){void 0===e&&(e={}),t.call(this),this.object3d=null,this.scene=null,this.startingRotation=null,this.activelyRotating=!1,this.lastDisplacementX=0,this.runningCount=5,this.runningAverageVelocityX=0}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={type:{}};return n.type.get=function(){return"TouchpadRotate"},e.prototype.awake=function(t,e){this.object3d=t,this.scene=e,altspace.addEventListener("touchpadup",this.onTouchpadUp.bind(this)),altspace.addEventListener("touchpaddown",this.onTouchpadDown.bind(this)),altspace.addEventListener("touchpadmove",this.onTouchpadMove.bind(this))},e.prototype.update=function(t){!this.activelyRotating&&Math.abs(this.runningAverageVelocityX)>.01&&(this.object3d.rotation.y+=this.runningAverageVelocityX,this.runningAverageVelocityX*=.97)},e.prototype.onTouchpadUp=function(t){this.activelyRotating=!1},e.prototype.onTouchpadDown=function(t){this.activelyRotating=!0,this.startingRotation=this.object3d.rotation.clone()},e.prototype.onTouchpadMove=function(t){var e=t.displacementX-this.lastDisplacementX;this.object3d.rotation.set(this.startingRotation.x,this.startingRotation.y+t.displacementX/300,this.startingRotation.z),this.runningAverageVelocityX=(this.runningAverageVelocityX*this.runningCount+e/300)/(this.runningCount+1),this.lastDisplacementX=t.displacementX},Object.defineProperties(e.prototype,n),e}(Bt),me=Object.freeze({Behavior:Bt,Bob:qt,ButtonStateStyle:Wt,Drag:Vt,GamepadControls:Kt,HoverColor:Qt,HoverScale:zt,JointCollisionEvents:Yt,Layout:ue,Object3DSync:he,SceneSync:pe,Spin:ge,SteamVRInput:be,SteamVRTrackedObject:ye,TouchpadRotate:ve}),we=Object.freeze({sync:_t,Simulation:Ft,multiloader:xt,codePen:Pt,shims:Nt,behaviors:me});window.altspace||(window.altspace={components:{},utilities:{},inClient:!1});var Ee="2.2.0";window.altspace.requestVersion&&window.altspace.requestVersion(Ee),window.AFRAME&&!window.THREE&&(window.THREE=window.AFRAME.THREE),Object.assign(window.altspace.components||{},mt),Object.assign(window.altspace.utilities||{},we)}(Firebase,Url,Please);