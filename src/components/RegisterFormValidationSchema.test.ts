import schema from './RegisterFormValidationSchema';

describe('RegisterFormValidationSchema', ()=>{

    const validFormData = {
        firstname: '123456',
        lastname: '123456',
        email: 'nick@kitset.io',
        phone: '0424709069',
    }
    const tooLong = Array(100).fill("a", 0, 100).join('');

    it('#firstname should be required', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            firstname: null
        })

        expect(isValid).toEqual(false);
    })

    it('#firstname should be too short', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            firstname: '1'
        })

        expect(isValid).toEqual(false);
    })

    it('#firstname should be too long', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            firstname: tooLong // 100 chars
        })

        expect(isValid).toEqual(false);
    })

    it('#firstname should be just right', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            firstname: '123456'
        })

        expect(isValid).toEqual(true);
    })

    /** 
     * @name Lastname 
     */
    it('#lastname should be required', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            lastname: null
        })

        expect(isValid).toEqual(false);
    })

    it('#lastname should be too short', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            lastname: '1'
        })

        expect(isValid).toEqual(false);
    })

    it('#lastname should be too long', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            lastname: tooLong // 100 chars
        })

        expect(isValid).toEqual(false);
    })

    it('#lastname should be just right', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            lastname: '123456'
        })

        expect(isValid).toEqual(true);
    })

    /** 
     * @name Email 
     */
    it('#email should be required', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            email: null
        })

        expect(isValid).toEqual(false);
    })

    it('#email should be too short', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            email: '1'
        })

        expect(isValid).toEqual(false);
    })

    it('#email should be too long', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            email: tooLong.length // 100 chars
        })

        expect(isValid).toEqual(false);
    })

    it('#email should be just right', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            email: 'nick@kitset.io'
        })

        expect(isValid).toEqual(true);
    })

    /** 
     * @name Phone  
     */
    it('#phone should be required', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            phone: null
        })

        expect(isValid).toEqual(false);
    })

    it('#phone should be too short', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            phone: '1'
        })

        expect(isValid).toEqual(false);
    })

    it('#phone should be too long', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            phone: tooLong.length // 100 chars
        })

        expect(isValid).toEqual(false);
    })

    it('#phone should be just right', async ()=>{
        
        const isValid = await schema.isValid({
            ...validFormData,
            phone: '0424709069'
        })

        expect(isValid).toEqual(true);
    })
})