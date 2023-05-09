export default class Colour
{
    rgba: string

    constructor (r: number, g: number, b: number, a: number)
    {
        let rStr = ''
        let gStr = ''
        let bStr = ''
        let aStr = ''

        if (r < 255 && r > 0)
        {
            rStr = r.toString()
        }

        if (g < 255 && g > 0)
        {
            gStr = g.toString()
        }
        
        if (b < 255 && b > 0)
        {
            bStr = b.toString()
        }
        
        if (a <= 1 && a >= 0)
        {
            aStr = b.toString()
        }
       
        this.rgba = 'rgba(' + rStr + ',' + gStr + ',' + bStr + ',' + aStr + ')'
    }
    
    //from Hex

    static fromHex(hex: string, a: number = 1) 
    {   
        
        let r = parseInt(hex.slice(1, 3), 16)
        let g = parseInt(hex.slice(3, 5), 16)
        let b = parseInt(hex.slice(5, 7), 16)
      
        return new Colour(r, g, b, a)
    }
      
    //from RGB (alpha set to 1)
    
    static fromRGB(r: number, g: number, b: number, a: number = 1)
    {
        return new Colour (r, g, b, 1)
    }

    // from HSL

    static fromHSL(h: number, s: number, l: number, a: number): Colour {
        let r, g, b;
    
        // Convert hsl to rgb
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = function hue2rgb(p: number, q: number, t: number) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }
    
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
    
        // Convert rgb to rgba
        return new Colour(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a);
    }
    
    // setRed

    setRed(r: number)
    {   
        let rStr = ''
        if (r < 255 && r > 0)
        {   
            rStr = r.toString()
            const components = this.rgba.split(',')
            components[0] = rStr
            this.rgba = components.join(',')
        }
    }

    // setBlue

    setBlue(b: number)
    {   
        let bStr = ''
        if (b < 255 && b > 0)
        {   
            bStr = b.toString()
            const components = this.rgba.split(',')
            components[0] = bStr
            this.rgba = components.join(',')
        }
    }

    // setGreen

    setGreen(g: number)
    {   
        let gStr = ''
        if (g < 255 && g > 0)
        {   
            gStr = g.toString()
            const components = this.rgba.split(',')
            components[0] = gStr
            this.rgba = components.join(',')
        }
    }
    
}