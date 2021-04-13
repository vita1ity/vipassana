<template>
<div class="teacher-modals">
    <Modal v-show="modalOpened === 'oleg'" 
        @close="closeModal" 
        title=""
        >
        <template slot="body">
            <TeacherModalBody img="oleg.jpg"
                            :name="$t('teacher.oleg')" 
                            :subtitle="$t('teacher.oleg.subtitle')" 
                            :text="$t('teacher.oleg.text')"
                            :telegram="olegTelegram"
                            :viber="olegViber"
                            :fb="olegFb" 
                        />
        </template>
    </Modal>
    <Modal v-show="modalOpened === 'yana'" 
        @close="closeModal" 
        title=""
        >
        <template slot="body">
            <TeacherModalBody img="yana.jpg" 
                            :name="$t('teacher.yana')" 
                            :subtitle="$t('teacher.yana.subtitle')" 
                            :text="$t('teacher.yana.text')"
                            :telegram="olegTelegram"
                            :viber="olegViber"
                            :fb="olegFb" 
                        />
        </template>
    </Modal>
    <Modal v-show="modalOpened === 'vika'" 
        @close="closeModal" 
        title=""
        >
        <template slot="body">
            <TeacherModalBody img="vika.jpg" 
                            :name="$t('teacher.vika')" 
                            :subtitle="$t('teacher.vika.subtitle')" 
                            :text="$t('teacher.vika.text')"
                            :telegram="olegTelegram"
                            :viber="olegViber"
                            :fb="olegFb" 
                        />
        </template>
    </Modal>
</div>
    
</template>
<script>
import Modal from '@/components/Modals/Modal'
import TeacherModalBody from '@/components/Modals/TeacherModalBody'

export default {
    props: ['modalOpened'],
    components: {
        Modal,
        TeacherModalBody,
    },
    data() {
        return {
            olegTelegram: 'tg://resolve?domain=@oleg_oum_kiev',
            olegViber: 'viber://chat?number=%2B380668853728',
            olegFb: 'https://www.facebook.com/olegoum/',
            yanaTelegram: '',
            yanaViber: '',
            yanaFb: '',
            vikaTelegram: '',
            vikaViber: '',
            vikaFb: '',
        }
    },
    methods: {
        closeModal() {
            this.$emit('emitCloseModal')
        }
    }
}    
</script>
<style lang="sass" scoped>

</style>