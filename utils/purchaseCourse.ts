export default async function (service: string, courseId: any, userId: string) {
    const res = await useService('rpc').create({
        method: 'PurchaseCourse',
        data: {
            service: service,
            courseId: courseId,
            userId: userId
        }
    });
    
    if (res.data.message === 'all is okay') {
        navigateTo('/account');
    }
    
    if (res.data.message === 'course is not free') {
        const res = await useService(service).get(courseId);
        
        navigateTo({
            path: `/payment/${courseId}`,
            query: {
                model_name: service,
                price: res.data.price,
                user_id: userId,
            }
        });
    }
}