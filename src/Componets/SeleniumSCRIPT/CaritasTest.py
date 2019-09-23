from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from time import sleep
from termcolor import colored
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

class Test(object):
    def __init__(self):
        self.driver = webdriver.Chrome(executable_path='/usr/local/bin/chromedriver',port=3790)
        self.PASSED = 0
        self.NOTPASSED = 0
        self.TOTAL = 1
    
    def LoginTest(self):
        driver = self.driver
        driver.get('http://localhost:3000/')
        UserField = driver.find_element_by_id('name')
        PassField = driver.find_element_by_id('pass')
        Button = driver.find_element_by_tag_name('button')
    
        UserField.send_keys('admin')
        PassField.send_keys('admin')
    
        Button.click()

        Title = driver.find_element_by_id('TituloB')

        if Title.text == "Bienvenido al Sistema administrativo de Pacientes de Caritas":
            self.PASSED+=1
            #driver.close()
        else:
            self.NOTPASSED+=1
            print (colored("Login Test Not Passed","red",attrs=['bold']),"\n")
            #driver.close()

    def FormTest(self):
        driver = self.driver
        driver.get('http://localhost:3000/')
        UserField = driver.find_element_by_id('name')
        PassField = driver.find_element_by_id('pass')
        Button = driver.find_element_by_tag_name('button')
    
        UserField.send_keys('admin')
        PassField.send_keys('admin')
    
        Button.click()

        FormButton = driver.find_element_by_id('ButtonAdd')
        FormButton.click()

        sleep(4)

        DropDepartamento = Select(driver.find_element_by_id('departamento'))
        DropDepartamento.select_by_index(1)

        DropEstadoCivil = Select(driver.find_element_by_id('estado-civil'))
        DropEstadoCivil.select_by_index(1)

        DropEducacion = Select(driver.find_element_by_id('educacion'))
        DropEducacion.select_by_index(1)

        DropGenero = Select(driver.find_element_by_id('genero'))
        DropGenero.select_by_index(1)

        DropOcupacion = Select(driver.find_element_by_id('ocupacion'))
        DropOcupacion.select_by_index(1)

        DropMunicipio = Select(driver.find_element_by_id('beneficiario-parroquia'))
        DropMunicipio.select_by_index(1)

        DateField = driver.find_element_by_id('fecha_nacimiento')
        FirstNameField = driver.find_element_by_id('nom_paciente')
        SecondNameField = driver.find_element_by_id('p_apellido')
        SecondNameField2 = driver.find_element_by_id('s_apellido')
        IdentityField = driver.find_element_by_id('num_identidad')
        DireccionField = driver.find_element_by_id('direccion')
        LocationField = driver.find_element_by_id('localidad')
        TelephoneField = driver.find_element_by_id('telefono')

        Boys = driver.find_element_by_id('CantNiños')
        Girls = driver.find_element_by_id('CantNiñas')
        Other = driver.find_element_by_id('CantOtros')

        NextButton = driver.find_element_by_id('NextBtn')

        DateField.send_keys('11111111')
        FirstNameField.send_keys('Mario Guillermo')
        SecondNameField.send_keys('Flores')
        SecondNameField2.send_keys('Enamorado')
        IdentityField.send_keys('12345')
        DireccionField.send_keys('Fesitrahn')
        LocationField.send_keys('Zona 1 casa 350')
        TelephoneField.send_keys('1234564')
        Boys.send_keys('0')
        Girls.send_keys('0')
        Other.send_keys('0')

        NextButton.click()

        sleep(4)
        TipoCaso= driver.find_element_by_id('tipo_caso')
        TipoCaso.send_keys('1')
        DropTratamiento = Select(driver.find_element_by_id('tratamiento'))
        DropTratamiento.select_by_index(1)

        NumeroExpediente = driver.find_element_by_id('no_expediente')
        NumeroExpediente.send_keys('123456')

        EstadoAtencion = Select(driver.find_element_by_id('estado-atencion'))
        EstadoAtencion.select_by_index(1)

        Terapeuta = Select(driver.find_element_by_id('terapeuta'))
        Terapeuta.select_by_index(1)

        Remision = Select(driver.find_element_by_id('remision'))
        Remision.select_by_index(1)

        AccesoJusticia = Select(driver.find_element_by_id('acceso-justicia'))
        AccesoJusticia.select_by_index(1)

        tipoViolencia = driver.find_element_by_id('VPsicologia')
        tipoViolencia.click()

        tipoCondicion = driver.find_element_by_id('Victima')
        tipoCondicion.click()

        CausaViolencia = driver.find_element_by_id('Economica')
        CausaViolencia.click()

        UbicacionViolencia = driver.find_element_by_id('Urbana')
        UbicacionViolencia.click()


        ButtonNext = driver.find_element_by_id('ButtonNxt')
        ButtonNext.click()


        ButtonNext = driver.find_element_by_id('ButtonNxt')
        ButtonNext.click()

        ButtonNext = driver.find_element_by_id('ButtonNxt')
        ButtonNext.click()

        
        actions = ActionChains(driver)
        actions.send_keys(Keys.TAB)
        actions.send_keys(Keys.TAB)
        actions.send_keys(Keys.TAB)
        actions.send_keys(Keys.TAB)

        actions.send_keys(Keys.ENTER)
        sleep(4)
        actions.perform()

        driver.refresh()

        UserField = driver.find_element_by_id('name')
        PassField = driver.find_element_by_id('pass')
        Button = driver.find_element_by_tag_name('button')
    
        UserField.send_keys('admin')
        PassField.send_keys('admin')
    
        Button.click()

        sleep(4)

        ButtonPacientes = driver.find_element_by_id('Pacientes')
        ButtonPacientes.click()

        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        sleep(2)

        driver.refresh()

        UserField = driver.find_element_by_id('name')
        PassField = driver.find_element_by_id('pass')
        Button = driver.find_element_by_tag_name('button')
    
        UserField.send_keys('admin')
        PassField.send_keys('admin')
    
        Button.click()

        sleep(4)
        ButtonPacientes = driver.find_element_by_id('Casos')
        ButtonPacientes.click()

        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        sleep(2)

        self.PASSED+=1

        driver.close()
    
    def RunTest(self):
        self.LoginTest()
        self.FormTest()
        print(colored("Total of Tests: ","white",attrs=['bold']),str(self.TOTAL),"\n")
        print(colored("Passed Test: ","green",attrs=['bold']),str(self.PASSED),"\n")
        print(colored("Not Passed Test: ","red",attrs=['bold']),str(self.NOTPASSED),"\n")

AllTest = Test()
AllTest.RunTest()
