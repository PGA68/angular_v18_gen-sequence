>>> #### Example ordinare generation zero payload code with **_bun.js_**
>>> #### Sequence of commits with sequence of ng generation commands
>>> + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
>>> + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
>>> + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
>>> + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 


# Angular v18   

## Tag SETUP_1 : Application & Library

$$-Devmode-$$

```cmd
bun start
```

### Browser bundles

|Initial chunk files     | Names               |  Raw size |
|:-----------------------|:-------------------:|----------:|
|polyfills.js            | polyfills           |  88.10 kB | 
|main.js                 | main                |  22.83 kB | 
|styles.css              | styles              | 112 bytes | 
|                        | Initial total       | 111.04 kB |


### Server bundles

|Initial chunk files     | Names               |  Raw size |
|:-----------------------|:-------------------:|----------:|
|chunk-4EGJGG5L.mjs      | -                   |   1.80 MB | 
|polyfills.server.mjs    | polyfills.server    | 570.81 kB | 
|main.server.mjs         | main.server         | 224.13 kB | 
|chunk-QDHZVCWX.mjs      | -                   |   2.57 kB | 
|render-utils.server.mjs | render-utils.server | 423 bytes | 


|Lazy chunk files        | Names               |  Raw size |
|:-----------------------|:-------------------:|----------:|
|chunk-XD2MYPRT.mjs      | xhr2                |  40.04 kB | 


**Application bundle generation complete. [14.223 seconds]**

___

$$ -Producton- $$

```cmd
bun run build my-app
```

### Browser bundles

|Initial chunk files     | Names               |  Raw size | Estimated transfer size |
|:-----------------------|:-------------------:|----------:|------------------------:|
|main-74VENUCA.js        | main                | 215.42 kB |                58.98 kB |
|polyfills-A7MJM4D4.js   | polyfills           |  34.13 kB |                11.06 kB |
|styles-5INURTSO.css     | styles              |   0 bytes |                 0 bytes |
|                        | Initial total       | 249.55 kB |                70.04 kB |


### Server bundles

|Initial chunk files     | Names               |  Raw size |
|:-----------------------|:-------------------:|----------:|
|server.mjs              | server              |   1.60 MB |                        
|chunk-FEI4FODL.mjs      | -                   | 520.51 kB |                        
|polyfills.server.mjs    | polyfills.server    | 268.21 kB |                        
|chunk-VXMTD2U2.mjs      | -                   |  19.21 kB |                        
|chunk-NDYDZJSS.mjs      | -                   |   2.55 kB |                        
|render-utils.server.mjs | render-utils.server |   1.46 kB |                        
|main.server.mjs         | main.server         | 149 bytes |                        


|Lazy chunk files        | Names               |  Raw size |
|:-----------------------|:-------------------:|----------:|
|chunk-44PQKHNF.mjs      | xhr2                |  12.08 kB |                        


**Application bundle generation complete. [8.027 seconds]**

---

$$Library$$

## Building Angular Package

```cmd
bun run build my-lib
```

> _from:_ **/Multy/projects/my-lib**
>
> _to:_   **/Multy/dist/my-lib**
---

**Build at: 2024-05-28T08:45:53.762Z - Time: 3997ms**

# &

## Tag SETUP_2 : Application & Library full complect

$$-Devmode-$$

```cmd
bun start
```

### Browser bundles  

Initial chunk files     | Names               |  Raw size
|:-----------------------|:-------------------:|----------:|
polyfills.js            | polyfills           |  88.10 kB | 
main.js                 | main                |  23.16 kB | 
styles.css              | styles              | 112 bytes | 
|                        | Initial total       | 111.37 kB


### Server bundles 

Initial chunk files     | Names               |  Raw size
|:-----------------------|:-------------------:|----------:|
chunk-X7Q6BLXG.mjs      | -                   |   1.85 MB | 
polyfills.server.mjs    | polyfills.server    | 570.81 kB | 
main.server.mjs         | main.server         | 237.30 kB | 
chunk-QDHZVCWX.mjs      | -                   |   2.57 kB | 
render-utils.server.mjs | render-utils.server | 423 bytes | 

Lazy chunk files        | Names               |  Raw size
|:-----------------------|:-------------------:|----------:|
chunk-XD2MYPRT.mjs      | xhr2                |  40.04 kB | 

**Application bundle generation complete. [8.098 seconds]**


---

$$ -Producton- $$

```cmd
bun run build my-app
```

### Browser bundles        

Initial chunk files     | Names               |  Raw size | Estimated transfer size
|:-----------------------|:-------------------:|----------:|------------------------:|
main-5LNJPRN3.js        | main                | 224.07 kB |                61.25 kB
polyfills-A7MJM4D4.js   | polyfills           |  34.13 kB |                11.06 kB
styles-5INURTSO.css     | styles              |   0 bytes |                 0 bytes
|        | Initial total       | 258.19 kB |                72.32 kB


### Server bundles  

Initial chunk files     | Names               |  Raw size
|:-----------------------|:-------------------:|----------:|
server.mjs              | server              |   1.60 MB |                        
chunk-R6LYRYEQ.mjs      | -                   | 526.80 kB |                        
polyfills.server.mjs    | polyfills.server    | 268.21 kB |                        
chunk-NAZKNV72.mjs      | -                   |  24.46 kB |                        
chunk-NDYDZJSS.mjs      | -                   |   2.55 kB |                        
render-utils.server.mjs | render-utils.server |   1.46 kB |                        
main.server.mjs         | main.server         | 149 bytes |                        

Lazy chunk files        | Names               |  Raw size
|:-----------------------|:-------------------:|----------:|
chunk-44PQKHNF.mjs      | xhr2                |  12.08 kB |                        

Prerendered 1 static route.
Output location: Multy/dist/my-app

**Application bundle generation complete. [23.891 seconds]**

---

$$Library$$

## Building Angular Package


```cmd
bun run build my-lib
```

> _from:_ **/Multy/projects/my-lib**
>
> _to:_   **/Multy/dist/my-lib**
---

Build at: 2024-05-29T23:58:02.749Z - Time: 4269ms

$$pga68$$