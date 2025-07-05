package nibm.hdse242f.wanderlog

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.background
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.clickable
import androidx.compose.material.*
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import nibm.hdse242f.wanderlog.ui.theme.WanderLogTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            WanderLogTheme {
                WelcomeScreen()
            }
        }
    }
}

@Composable
fun WelcomeScreen() {
    Box(
        modifier = Modifier
            .fillMaxSize()
    ) {
        Image(
            painter = painterResource(id = R.drawable.bg_welcome_page),
            contentDescription = "Background Image",
            contentScale = ContentScale.Crop,
            modifier = Modifier.fillMaxSize()
        )

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 24.dp, vertical = 48.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Top
        ) {
            // Logo
            Image(
                painter = painterResource(id = R.drawable.logo),
                contentDescription = "Logo",
                modifier = Modifier
                    .size(250.dp)
                    .padding(vertical = 8.dp)
            )

            // 📝 App Title - Modern & Bold
            Text(
                text = "Welcome , \n \nGo Explore",
                color = Color.Black,
                fontSize = 36.sp,
                fontWeight = FontWeight.ExtraBold,
                textAlign = TextAlign.Center,
                modifier = Modifier
                    .padding(top = 16.dp)
            )
        }

        // Get Started Button at Bottom Center
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(bottom = 40.dp),
            contentAlignment = Alignment.BottomCenter
        ) {
            Button(
                onClick = { /* TODO: Navigate to login */ },
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xFF05A85C)
                ),
                modifier = Modifier
                    .fillMaxWidth(0.8f)
                    .height(50.dp),
                shape = RoundedCornerShape(12.dp)
            ) {
                Text(
                    text = "Get Started",
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold
                )
            }
        }
    }
}
