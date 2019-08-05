/*
LILIANA SARAHI HERNANDEZ GONZALEZ 1808932 JUEVES V4

*/
import javax.swing.JOptionPane;
public class ImpresionNumerosNaturales{
	public static void main(String[] args){
		String loquepido;
		int cal,i;
		String impresion = "";
		
		loquepido = JOptionPane.showInputDialog("Ingresa tus calificaciones: ");
		cal = Integer.parseInt(loquepido);
		for(i=1;i<=num;i++){
			impresion = impresion + i + ",";
		}
		JOptionPane.showMessageDialog(null,impresion);
		
			
	}//Fin metodo main
}//Fin de clase

